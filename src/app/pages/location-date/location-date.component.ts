import { Component, OnInit } from '@angular/core';
import {LocationDateService} from '../../shared/services/location-date.service';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-location-date',
  templateUrl: './location-date.component.html',
  styleUrls: ['./location-date.component.css']
})
export class LocationDateComponent implements OnInit {

  public locationDateForm: FormGroup;

  constructor(private locationDateService: LocationDateService) { }

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
    }, { validators: identityRevealedValidator });
  }



  onSubmit() {
    if (this.locationDateForm.valid){
      this.locationDateService.setLocationDate(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.locationDateForm.get('zipCode').value);
      this.locationDateService.isSpecified = true;
    }
  }

  edit() {
    this.locationDateService.isSpecified = false;
  }
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const zipCode = control.get('zipCode');
  const startDate = control.get('startDate');
  const endDate = control.get('endDate');

  return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? { 'identityRevealed': true } : null;
};
