import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationDateService} from '../../shared/services/location-date.service';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {DeliveryChartModel, ZipCode} from '../../shared/model/delivery-chart.model';
import {debounceTime, finalize, flatMap, map, startWith, tap} from 'rxjs/operators';
import {DeliveryChartService} from '../../shared/services/delivery-chart.service';
import {OrderService} from '../../shared/services/order.service';
import * as moment from 'moment';


@Component({
  selector: 'app-location-date',
  templateUrl: './location-date.component.html',
  styleUrls: ['./location-date.component.css']
})
export class LocationDateComponent implements OnInit {

  public locationDateForm: FormGroup;

  stateGroupOptions: Observable<string[]> = of([]);

  public allDeliveryCharts: DeliveryChartModel[] = [];

  public isLoading: boolean = false;

  @Output() emitSubmit = new EventEmitter<boolean>();

  constructor(private locationDateService: LocationDateService,
              private deliveryChartService: DeliveryChartService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.initForm();
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
      this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value).subscribe(res=>{
        if (res) {
          let finalStartDate = LocationDateComponent.getTimeWithDateTime(this.locationDateForm.get('startDate').value,
            this.locationDateForm.get('startDateTime').value);
          let finalEndDate = LocationDateComponent.getTimeWithDateTime(this.locationDateForm.get('endDate').value,
            this.locationDateForm.get('endDateTime').value);
          this.getZipCode(this.locationDateForm.get('zipCode').value).subscribe((zipCode: ZipCode) => {
            this.locationDateService.setLocationDate(finalStartDate, finalEndDate, zipCode);
            this.orderService.setOrderDateLocation(finalStartDate, finalEndDate, zipCode);
            this.locationDateService.setIsSpecified(true);
            this.emitSubmit.emit(true);
          });
        } else {
          this.locationDateForm.setErrors({incorrectZipLocation: true}) ;
        }
      })

    }
  }

  edit() {
    this.locationDateService.setIsSpecified(false);
  }

  checkCityOrZipCode(value: string): Observable<boolean> {
    let city: string[] = value.match(/[a-zA-Z]+/g);
    let zipCode: string[] = value.match(/\d+/g);
    return this.deliveryChartService.getDeliveryLocationByZipCode(zipCode[0]).pipe(
      map(res=> city.join(' ') === res.city)
    );
  }

  getZipCode(value: string): Observable<ZipCode> {
    let zipCode: string[] = value.match(/\d+/g);
    let city: string = value.match(/[a-zA-Z]+/g).join(" ");
    return this.deliveryChartService.getZipCodeModelByZipCode(zipCode[0]).pipe(map(res=>{
      res.location = city + " " + res.zipCode;
      return res;
    }));
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

  static getTimeWithDateTime(date: Date, time: string): Date {
    if (date.toLocaleDateString().indexOf('.') >= 0){
      let replaceDate = date.toLocaleDateString().split(".").join("-");
      return moment(replaceDate +" " + time, 'DD-MM-YYYY hh:mm A').toDate();
    }
    return moment(date.toLocaleDateString() +" " + time, 'MM-DD-YYYY hh:mm A').toDate();
  }

  private initForm() {
    this.locationDateForm = new FormGroup({
      'zipCode': new FormControl(this.locationDateService.locationDate.getLocation(), [
        Validators.required
      ]),
      'startDate': new FormControl(
        this.locationDateService.locationDate.startDateTime, [
          Validators.required
        ]),
      'startDateTime': new FormControl(
        this.locationDateService.locationDate.startDateTime?
          this.locationDateService.locationDate.startDateTime.toLocaleTimeString():null,
        [
          Validators.required
        ]),
      'endDateTime': new FormControl(
        this.locationDateService.locationDate.endDateTime?
          this.locationDateService.locationDate.endDateTime.toLocaleTimeString(): null,
        [
          Validators.required
        ]),
      'endDate': new FormControl(
        this.locationDateService.locationDate.endDateTime, [
          Validators.required
        ]),
    }, {validators: [identityRevealedValidator, identityTimeValidator]});
  }
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (!control.get('startDate').value || !control.get('startDateTime').value ||
    !control.get('endDate').value || !control.get('endDateTime').value){
    return null;
  }
  const finalStartDate = LocationDateComponent.getTimeWithDateTime(control.get('startDate').value,
    control.get('startDateTime').value);
  const finalEndDate = LocationDateComponent.getTimeWithDateTime(control.get('endDate').value,
    control.get('endDateTime').value);
  return (finalEndDate.getTime() - finalStartDate.getTime() < 0) ? {'identityRevealed': true} : null;
};

export const identityTimeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  if (!control.get('startDate').value || !control.get('startDateTime').value){
    return null;
  }
  const finalStartDate = LocationDateComponent.getTimeWithDateTime(control.get('startDate').value,
    control.get('startDateTime').value);
  let now = new Date();
  return (finalStartDate.getTime() - now.getTime() < 54000000) ? {'identityTime': true} : null;
};
