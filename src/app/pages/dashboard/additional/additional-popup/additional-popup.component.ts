import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../../../../shared/services/upload.service';
import {AdditionModel} from '../../../../shared/model/addition.model';
import {handleError} from '../../../../shared/util/error-handler';
import {AdditionCategoryService} from '../../../../shared/services/addition-category.service';
import {AdditionCategoryModel} from '../../../../shared/model/addition-category.model';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-additional-popup',
  templateUrl: './additional-popup.component.html',
  styleUrls: ['./additional-popup.component.css']
})
export class AdditionalPopupComponent implements OnInit {
  additionModel: AdditionModel;
  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup;
  fileMaxSizeErrorMessage: string;

  @ViewChild('input', { static: false }) inputRef: ElementRef;
  public categories: AdditionCategoryModel[];

  constructor(public dialogRef: MatDialogRef<AdditionalPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private uploadService: UploadService,
              private categoryService: AdditionCategoryService) {
    this.additionModel = this.data.item;
  }

  ngOnInit() {
    this.initForm();
    this.getCategories();
  }

  get categoryId() {
    return this.data.category ? this.data.category.id : ''
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close({
          item: new AdditionModel(
            this.additionModel.id,
            this.form.get('title').value,
            this.form.get('imageUrl').value
          ),
        newCategoryId: this.form.get('category').value,
        oldCategoryId: this.categoryId
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

  private getCategories() {
    this.categoryService.getAdditionCategories()
      .then(
        res => {
          this.categories = res;
        },
        error => handleError(error)
      )
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.additionModel.name, [
        Validators.required
      ]),
      imageUrl: this.formBuilder.control(this.additionModel.imageUrl || '', [

      ]),
      category: this.formBuilder.control(this.categoryId, [
        Validators.required
      ]),
    })
  }

  compareFn: ((f1: any, f2: any) => boolean) | null = this.compare;

  compare(f1: any, f2: any) {
    return f1 === f2;
  }
}
