import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationDateService} from '../../shared/services/location-date.service';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {DeliveryChartModel, ZipCode} from '../../shared/model/delivery-chart.model';
import {map, startWith} from 'rxjs/operators';
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

  stateGroupOptions: Observable<string[]>;

  public allDeliveryCharts: DeliveryChartModel[] = [];

  public startAt;

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

    this.deliveryChartService.getDeliveryLocations().subscribe(res => {
      this.allDeliveryCharts = res;
      this.initAutoCompleteOptions();
    });

    this.stateGroupOptions = this.locationDateForm.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value.zipCode))
    );
  }

  private _filterGroup(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();

      return this.stateGroups.filter(option => option.toLowerCase().includes(filterValue));
    }
    return this.stateGroups;
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

  private initAutoCompleteOptions() {
    let zipCodeNames: string [] = [];
    for (let city of this.allDeliveryCharts) {
      for (let zipCode of city.zipCodes) {
        zipCodeNames.push(city.city + ' ' + zipCode.zipCode);
      }
    }
    this.stateGroups.push(...zipCodeNames);
  }

  isSpecified() {
    return this.locationDateService.isSpecified;
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
