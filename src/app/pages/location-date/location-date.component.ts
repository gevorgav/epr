import { Component, OnInit } from '@angular/core';
import {LocationDateService} from '../../shared/services/location-date.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-location-date',
  templateUrl: './location-date.component.html',
  styleUrls: ['./location-date.component.css']
})
export class LocationDateComponent implements OnInit {


  public selectedMoments = [
    null,
    null
  ];
  public zipCode: number;

  public locationDateForm: FormGroup;

  constructor(private locationDateService: LocationDateService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locationDateForm = new FormGroup({
      'zipCode': new FormControl(this.zipCode, [
        Validators.required
      ]),
      'start': new FormControl(this.selectedMoments[0], [
        Validators.required
      ]),
      'end': new FormControl(this.selectedMoments[1], [
        Validators.required
      ]),
      // 'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  getFormControl(name: string) { return this.locationDateForm.get(name); }

  rent() {
    if (this.locationDateForm.valid){
      console.log(this.selectedMoments+""+this.zipCode);
    }
   
  }

}
