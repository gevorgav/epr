import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {CategoryModel} from '../../../../shared/model/category.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadService} from "../../../../shared/services/upload.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrls: ['./category-popup.component.css']
})
export class CategoryPopupComponent implements OnInit {

  category: CategoryModel;
  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup;
  fileMaxSizeErrorMessage: string;

  @ViewChild('input', { static: false }) inputRef: ElementRef;

  constructor(public dialogRef: MatDialogRef<CategoryPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private uploadService: UploadService) {
    this.category = this.data.category;
  }

  ngOnInit() {
    this.initForm();
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close({
          category: new CategoryModel(
            this.category.id,
            this.form.get('title').value,
            this.form.get('description').value,
            this.form.get('imageUrl').value,
            this.form.get('metaDescription').value,
            null,
            this.form.get('pageTitle').value,
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

  deleteImage(){
    this.form.get('imageUrl').setValue('');
  }


  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event){
    this.fileMaxSizeErrorMessage = '';
    if (event.target.files.length > 0) {
      this.uploadService.uploadFile(event.target.files[0])
        .subscribe(
          res => {
            this.form.get('imageUrl').setValue(res.fileName);
          },
          error => {
            if (error.fileMaxSize) {
              this.fileMaxSizeErrorMessage = error.message;
            }
          }
        );
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.category.title, [
        Validators.required
      ]),
      description: this.formBuilder.control(this.category.description, [

      ]),
      imageUrl: this.formBuilder.control(this.category.imageUrl || '', [

      ]),
      metaDescription: this.formBuilder.control(this.category.metaDescription, [

      ]),
      pageTitle: this.formBuilder.control(this.category.pageTitle, [

      ])
    })
  }
}
