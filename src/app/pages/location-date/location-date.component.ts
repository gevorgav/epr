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
    this.locationDateForm = this.formBuilder.group({
      zipCode: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', [Validators.required, Validators.email]]
    });
  }

  get form() { return this.locationDateForm.controls; }

  rent() {
    console.log(this.selectedMoments+""+this.zipCode);
  }

}
