import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DeliveryChartService} from '../../shared/services/delivery-chart.service';
import {DeliveryChartModel} from '../../shared/model/delivery-chart.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-delivery-cart',
  templateUrl: './delivery-chart.component.html',
  styleUrls: ['./delivery-chart.component.css']
})
export class DeliveryChartComponent implements OnInit, AfterViewInit {
  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private deliveryChartService: DeliveryChartService, private fb: FormBuilder) {
  }

  public allDeliveryCharts: DeliveryChartModel[] = [];
  public deliveryChartsSearch: DeliveryChartModel[] = [];

  ngOnInit() {
    this.deliveryChartService.getDeliveryLocations().subscribe((res) => {
      this.deliveryChartsSearch = this.allDeliveryCharts = res;
      this.initAutoCompleteOptions();
    });
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  ngAfterViewInit(): void {
    this.stateForm.valueChanges.subscribe(res => {
      this.valueChange(res.stateGroup);
    });
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  valueChange(value: string) {
    this.deliveryChartsSearch = [];
    if ( value == "" || value == null || value == undefined){
      this.deliveryChartsSearch = this.allDeliveryCharts;
    } else {
      for (let city of this.allDeliveryCharts) {
        if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          this.deliveryChartsSearch.push(city);
        } else {
          for (let zipCode of city.zipCodes) {
            if (zipCode.zipCode.indexOf(value) > -1) {
              this.deliveryChartsSearch.push(city);
              break;
            }
          }
        }
      }
    }
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

}


export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
