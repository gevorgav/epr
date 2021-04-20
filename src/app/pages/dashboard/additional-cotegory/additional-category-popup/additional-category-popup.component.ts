import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AdditionCategoryModel} from '../../../../shared/model/addition-category.model';

@Component({
  selector: 'app-additional-category-popup',
  templateUrl: './additional-category-popup.component.html',
  styleUrls: ['./additional-category-popup.component.css']
})
export class AdditionalCategoryPopupComponent implements OnInit {

  category: AdditionCategoryModel;
  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup;

  @ViewChild('input', { static: false }) inputRef: ElementRef;

  constructor(public dialogRef: MatDialogRef<AdditionalCategoryPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.category = this.data.category;
  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close({
          category: new AdditionCategoryModel(
            this.category.id,
            this.form.get('title').value,
            this.form.get('multiSelect').value
          )
        }
      );
    } else {
      this.markFormGroupTouched(this.form)
    }

  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  cancel() {
    this.dialogRef.close(null);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.category.name, [
        Validators.required
      ]),
      multiSelect: this.formBuilder.control(this.category.multiSelect, [
      ]),
    })
  }

}
