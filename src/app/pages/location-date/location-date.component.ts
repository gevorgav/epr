import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationDateService} from '../../shared/services/location-date.service';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {DeliveryChartModel, ZipCode} from '../../shared/model/delivery-chart.model';
import {debounceTime, finalize, flatMap, map, startWith, switchMap, tap} from 'rxjs/operators';
import {DeliveryChartService} from '../../shared/services/delivery-chart.service';
import {OrderService} from '../../shared/services/order.service';

@Component({
  selector: 'app-location-date',
  templateUrl: './location-date.component.html',
  styleUrls: ['./location-date.component.css']
})
export class LocationDateComponent implements OnInit {

  public locationDateForm: FormGroup;

  stateGroups: string[] = [];

  stateGroupOptions: Observable<string[]> = of([]);

  public allDeliveryCharts: DeliveryChartModel[] = [];

  public startAt;

  public isLoading: boolean = false;

  @Output() emitSubmit = new EventEmitter<boolean>();

  constructor(private locationDateService: LocationDateService,
              private deliveryChartService: DeliveryChartService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    let defaultDate = new Date();
    defaultDate.setMinutes(0);
    this.startAt = defaultDate;
    this.locationDateForm = new FormGroup({
      'zipCode': new FormControl(this.locationDateService.locationDate.getLocation(), [
        Validators.required
      ]),
      'startDate': new FormControl(
        this.locationDateService.locationDate.startDateTime, [
          Validators.required
        ]),
      'endDate': new FormControl(
        this.locationDateService.locationDate.endDateTime, [
          Validators.required
        ]),
    }, {validators: [identityRevealedValidator, identityTimeValidator]});

    this.stateGroupOptions = this.locationDateForm.get('zipCode').valueChanges
      .pipe(
        debounceTime(300),
        startWith(''),
        tap(() => this.isLoading = true),
        flatMap(value => this._filterGroup(value)
          .pipe(finalize(() => this.isLoading = false))
        )
      );
  }

  private _filterGroup(value: string): Observable<string[]> {
    if (value) {
      let city: string[] = value.match(/[a-zA-Z]+/g);
      let zipCode: string[] = value.match(/\d+/g);
      let list: Observable<string[]>;
      if (city && !zipCode) {
        return this.getByCity(city[0].charAt(0).toUpperCase() + city[0].slice(1));
      } else if (zipCode && zipCode[0].length > 2) {
        return this.getByZipCodeAndCity(zipCode, city ? city[0].charAt(0).toUpperCase() + city[0].slice(1) : null);
      }
    }
    return of([]);
  }

  onSubmit() {
    if (this.locationDateForm.valid) {
      if (this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value)) {
        this.locationDateService.setLocationDate(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.getZipCode(this.locationDateForm.get('zipCode').value));
        this.orderService.setOrderDateLocation(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.getZipCode(this.locationDateForm.get('zipCode').value));
        this.locationDateService.setIsSpecified(true);
        this.emitSubmit.emit(true);
      } else {
        //@ts-ignore
        this.locationDateForm.errors = {incorrectZipLocation: true};
      }
    }
  }

  edit() {
    this.locationDateService.setIsSpecified(false);
  }

  checkCityOrZipCode(value: string): boolean {
    let isCorrect: boolean = false;

    for (let city of this.allDeliveryCharts) {
      for (let zipCode of city.zipCodes) {
        if (value.indexOf(zipCode.zipCode) > -1) {
          isCorrect = true;
          break;
        }
      }
    }

    return isCorrect;
  }

  getZipCode(value: string): ZipCode {
    for (let city of this.allDeliveryCharts) {
      for (let zipCode of city.zipCodes) {
        if (value.indexOf(zipCode.zipCode) > -1) {
          zipCode.location = value;
          return zipCode;
        }
      }
    }
  }

  private getAutoCompleteOptions(): string[] {
    let zipCodeNames: string [] = [];
    for (let city of this.allDeliveryCharts) {
      for (let zipCode of city.zipCodes) {
        zipCodeNames.push(city.city + ' ' + zipCode.zipCode);
      }
    }
    return zipCodeNames;
  }

  isSpecified() {
    return this.locationDateService.isSpecified;
  }

  private getByCity(city: string): Observable<string[]> {
    return this.deliveryChartService.getDeliveryLocationByCity(city).pipe(
      map(res => {
        return this.initDeliveryList(res);
      })
    );
  }

  private initDeliveryList(res: Array<DeliveryChartModel>) {
    this.allDeliveryCharts = res;
    return this.getAutoCompleteOptions();
  }

  private getByZipCodeAndCity(zipCode: string[], city: string): Observable<string[]> {
    return this.deliveryChartService.getDeliveryLocationsByZipCodeSearch(zipCode[0], city).pipe(
      map(res => {
        return this.initDeliveryList(res);
      })
    );
  }
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');
  return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? {'identityRevealed': true} : null;
};

export const identityTimeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const startDate = control.get('startDate');
  let now = new Date();
  return startDate.value && (startDate.value.getTime() - now.getTime() < 54000000) ? {'identityTime': true} : null;
};
