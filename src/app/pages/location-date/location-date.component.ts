import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocationDateService} from '../../shared/services/location-date.service';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {_filter, StateGroup} from '../delivery-chart/delivery-chart.component';
import {DeliveryChartModel} from '../../shared/model/delivery-chart.model';
import {map, startWith} from 'rxjs/operators';
import {DeliveryChartService} from '../../shared/services/delivery-chart.service';

@Component({
  selector: 'app-location-date',
  templateUrl: './location-date.component.html',
  styleUrls: ['./location-date.component.css']
})
export class LocationDateComponent implements OnInit {

  public locationDateForm: FormGroup;

  stateGroups: StateGroup[] = [];

  stateGroupOptions: Observable<StateGroup[]>;

  public allDeliveryCharts: DeliveryChartModel[] = [];

  @Output() emitSubmit = new EventEmitter<boolean>();

  constructor(private locationDateService: LocationDateService,
              private deliveryChartService: DeliveryChartService) {
  }

  ngOnInit() {
    this.locationDateForm = new FormGroup({
      'zipCode': new FormControl(this.locationDateService.locationDate.location, [
        Validators.required
      ]),
      'startDate': new FormControl(this.locationDateService.locationDate.startDateTime, [
        Validators.required
      ]),
      'endDate': new FormControl(this.locationDateService.locationDate.endDateTime, [
        Validators.required
      ]),
    }, {validators: identityRevealedValidator});

     this.deliveryChartService.getDeliveryLocations().subscribe(res=>{
       this.allDeliveryCharts = res;
       this.initAutoCompleteOptions()
    });

    this.stateGroupOptions = this.locationDateForm.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value.zipCode))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  onSubmit() {
    if (this.locationDateForm.valid) {
      if (this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value)) {
        this.locationDateService.setLocationDate(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.locationDateForm.get('zipCode').value);
        this.locationDateService.isSpecified = true;
        this.emitSubmit.emit(true);
      }else {
        //@ts-ignore
        this.locationDateForm.errors = {incorrectZipLocation: true};
      }
    }
  }

  edit() {
    this.locationDateService.isSpecified = false;
  }

  checkCityOrZipCode(value: string): boolean {
    let isCorrect: boolean = false;

    for (let city of this.allDeliveryCharts) {
      if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        isCorrect = true;
        break;
      } else {
        for (let zipCode of city.zipCodes) {
          if (zipCode.zipCode.indexOf(value) > -1) {
            isCorrect = true;
            break;
          }
        }
      }
    }

    return isCorrect;
  }

  private initAutoCompleteOptions() {
    let cityNames = [];
    let zipCodeNames = [];
    for (let city of this.allDeliveryCharts) {
      cityNames.push(city.city);
      for (let zipCode of city.zipCodes) {
        zipCodeNames.push(zipCode.zipCode);
      }
    }
    let cities: StateGroup = {letter: 'Cities', names: cityNames};
    let zipCodes: StateGroup = {letter: 'Zip codes', names: zipCodeNames};
    this.stateGroups.push(cities, zipCodes);
  }

  isSpecified(){
    return this.locationDateService.isSpecified;
  }

}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const zipCode = control.get('zipCode');
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');

  return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? {'identityRevealed': true} : null;
};
