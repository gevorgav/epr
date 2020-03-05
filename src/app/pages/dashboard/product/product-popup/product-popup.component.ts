import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ProductModel} from "../../../../shared/model/product.model";
import {FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ParseService} from "../../../../shared/services/parse.service";
import {CategoryService} from '../../../../shared/services/category.service';
import {CategoryModel} from '../../../../shared/model/category.model';
import {handleError} from '../../../../shared/util/error-handler';
import {UploadService} from "../../../../shared/services/upload.service";
import {AdditionCategoryService} from '../../../../shared/services/addition-category.service';
import {AdditionCategoryModel} from '../../../../shared/model/addition-category.model';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {

  product: ProductModel;
  categories: CategoryModel[];
  additionalCategories: AdditionCategoryModel[];

  public form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();

  @ViewChild('input') inputRef: ElementRef;

  setupPolicyKeys: string[] = [];
  setupPolicyValues: string[] = [];
  fileMaxSizeErrorMessage: string = '';
  get categoryId() {
    return this.data.category ? this.data.category.id : ''
  }

  constructor(public dialogRef: MatDialogRef<ProductPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private parseService: ParseService,
              private uploadService: UploadService,
              private categoryService: CategoryService,
              private additionalCategoryService: AdditionCategoryService) {
    this.product = this.data.product;
  }

  ngOnInit() {
    this.initSafetyRules();
    this.initForm();
    this.getCategories();
    this.getAdditionalCategories();
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close({
        product: new ProductModel(
          this.product.id,
          this.form.get('title').value,
          this.form.get('price').value,
          this.form.get('images').value,
          this.form.get('isNew').value,
          this.form.get('isHotDeal').value,
          this.form.get('itemSize').value,
          null,
          this.form.get('description').value,
          this.form.get('rentalTerms').value,
          this.form.get('spaceRequired').value,
          this.getSetupPolicy(),
          this.form.get('instructions').value,
          this.form.get('video').value,
          this.form.get('safetyRules').value,
          this.form.get('minTime').value,
          this.form.get('minPrice').value,
          this.form.get('nightPrice').value,
          this.form.get('count').value,
          this.form.get('additionalCategories').value,
          this.form.get('metaDescription').value
        ),
        newCategoryId: this.form.get('category').value,
        oldCategoryId: this.categoryId
      });
    } else {
      this.markFormGroupTouched(this.form);
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

  close() {
    this.dialogRef.close(null);
  }


  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  filterImages(src) {
    this.form.get('images').setValue(this.form.get('images').value.filter(item => item !== src));
  }

  onFileUpload(event){
    this.fileMaxSizeErrorMessage = '';
    if (event.target.files.length > 0) {
      this.uploadService.uploadFile(event.target.files[0])
        .subscribe(
          res => {
            this.form.get('images').value.push(res.fileName);
          },
          error => {
            if (error.fileMaxSize) {
              this.fileMaxSizeErrorMessage = error.message
            }
          }
        );
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.product.title, [
        Validators.required
      ]),
      price: this.formBuilder.control(this.product.price, [
        Validators.required,
        Validators.min(1)
      ]),
      description: this.formBuilder.control(this.product.description, [

      ]),
      category: this.formBuilder.control(this.categoryId, [
        Validators.required
      ]),
      itemSize:this.formBuilder.control(this.product.itemSize, [

      ]),
      isHotDeal: this.formBuilder.control(this.product.isHotDeal, [

      ]),
      isNew: this.formBuilder.control(this.product.isNew, [

      ]),
      rentalTerms: this.formBuilder.control(this.product.rentalTerms, [

      ]),
      spaceRequired: this.formBuilder.control(this.product.spaceRequired, [

      ]),
      setupPolicyKeys: this.formBuilder.array(this.initSetupPolicyKeys()),
      setupPolicyValues: this.formBuilder.array(this.initSetupPolicyValues()),
      instructions: this.formBuilder.control(this.product.instructions, [

      ]),
      safetyRules: this.formBuilder.control(this.product.safetyRules, [

      ]),
      images: this.formBuilder.control(this.product.images, [

      ]),
      video: this.formBuilder.control(this.product.video, [

      ]),
      metaDescription: this.formBuilder.control(this.product.metaDescription, [

      ]),
      minTime: this.formBuilder.control(this.product.minTime, [
        Validators.required,
        Validators.min(1)
      ]),
      minPrice: this.formBuilder.control(this.product.minPrice, [
        Validators.required,
        Validators.min(1)
      ]),
      nightPrice: this.formBuilder.control(this.product.nightPrice, [
        Validators.required,
        Validators.min(1)
      ]),
      count: this.formBuilder.control(this.product.count, [
        Validators.required,
        Validators.min(1)
      ]),
      additionalCategories: this.formBuilder.control(this.product.additionalCategories,[

      ])
    }, {validators: setupPolicyUniqueKeyValidator})
  }

  private initSafetyRules() {
    this.product.setupPolicy.forEach((value, key) => {
      this.setupPolicyKeys.push(key);
      this.setupPolicyValues.push(value)
    });

  }

  private initSetupPolicyKeys() {
    const res = [];
    this.setupPolicyKeys.forEach(item => res.push(this.createGroup(item)));
    return res;
  }

  private initSetupPolicyValues() {
    const res = [];
    this.setupPolicyValues.forEach(item => res.push(this.createGroup(item)));
    return res;
  }

  createGroup(name?: string): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control(name || '', [
        Validators.required
      ]),
    });
  }

  addSetupPolicy() {
    // debugger;
    (this.form.get('setupPolicyKeys') as FormArray).push(this.createGroup());
    (this.form.get('setupPolicyValues') as FormArray).push(this.createGroup());
  }

  removeSetupPolicy(index: number) {
    (this.form.get('setupPolicyKeys') as FormArray).removeAt(index);
    (this.form.get('setupPolicyValues') as FormArray).removeAt(index);
  }

  private getSetupPolicy(): Map<string, string> {
    let res = new Map();
    for (let i = 0; i < (this.form.get('setupPolicyKeys') as FormArray).controls.length; ++i) {
      res.set(
        (this.form.get('setupPolicyKeys') as FormArray).controls[i].get('name').value,
        (this.form.get('setupPolicyValues') as FormArray).controls[i].get('name').value
      );
    }
    return res;
  }

  public getSetupPolicyValuesControls(){
    return (this.form.get('setupPolicyValues') as FormArray).controls;
  }

  public getSetupPolicyKeysControls(){
    return (this.form.get('setupPolicyKeys') as FormArray).controls;
  }

  private getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        res => {
          this.categories = res;
        },
        error => handleError(error)
      )
  }

  compareFn: ((f1: any, f2: any) => boolean) | null = this.compare;

  compare(f1: any, f2: any) {
    return f1 === f2;
  }

  private getAdditionalCategories() {
    this.additionalCategoryService.getAdditionCategories().subscribe(res=>{
      this.additionalCategories = res;
    })
  }
}


const setupPolicyUniqueKeyValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  for (let i = 0; i < (control.get('setupPolicyKeys') as FormArray).controls.length; ++i) {
    for (let j = 0; j < (control.get('setupPolicyKeys') as FormArray).controls.length; ++j) {
      if (i == j) continue;
      if ((control.get('setupPolicyKeys') as FormArray).controls[i].get('name').value == (control.get('setupPolicyKeys') as FormArray).controls[j].get('name').value) {
        return { 'setupPolicyUniqueKey': true }
      }
    }
  }
  return null;
};
