import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DeliveryChartModel, ZipCode} from "../../../../shared/model/delivery-chart.model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-delivery-chart-popup',
  templateUrl: './delivery-chart-popup.component.html',
  styleUrls: ['./delivery-chart-popup.component.css']
})
export class DeliveryChartPopupComponent implements OnInit {
  
  deliveryChart: DeliveryChartModel;
  form: FormGroup;
  formBuilder = new FormBuilder();


  constructor(public dialogRef: MatDialogRef<DeliveryChartPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.deliveryChart = this.data.deliveryChart;
  }

  ngOnInit() {
    this.initForm();
  }



  private initForm() {
    this.form = this.formBuilder.group({
      city: this.formBuilder.control(this.deliveryChart.city, [
        Validators.required
      ]),
      zipCodes: this.formBuilder.array([ ...this.initZipCodes() ]),
      price: this.formBuilder.control(this.deliveryChart.price, [
        Validators.required
      ]),
      locationId: this.formBuilder.control(this.deliveryChart.locationId, [

      ]),
    });
  }

  private initZipCodes() {
    const res = [];
    if (this.deliveryChart.zipCodes){
      for (let code of this.deliveryChart.zipCodes) {
        res.push(this.createZipCode(code.zipCode, code.id))
      }
    }
    return res;
  }

  createZipCode(code?:string, id?: string): FormGroup {
    return this.formBuilder.group({
      code: this.formBuilder.control(code || '', [
        Validators.required
      ]),
      id: this.formBuilder.control(id || '', [

      ]),
    });
  }

  removeZipCode(index: number) {
    (this.form.get('zipCodes') as FormArray).controls.splice(index, 1);
  }

  addZipCode() {
    let items = this.form.get('zipCodes') as FormArray;
    items.push(this.createZipCode());
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close({
        deliveryChart: new DeliveryChartModel(
          this.deliveryChart.id,
          this.form.get('city').value,
          this.form.get('price').value,
          null,
          this.getZipCodes(),
          null
        )
      })
    }

  }

  cancel() {
    this.dialogRef.close(null);
  }

  private getZipCodes(): ZipCode[] {
    let res = [];
    for (let control of (this.form.get('zipCodes') as FormArray).controls) {
      res.push(new ZipCode(control.get('id').value, control.get('code').value));
    }
    return res;
  }
  
  public getZipCodesControls(){
    return (this.form.get('zipCodes') as FormArray).controls
  }

}
