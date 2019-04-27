import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ProductModel} from "../../../../shared/model/product.model";
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParseService} from "../../../../shared/services/parse.service";
import {CategoryService} from '../../../../shared/services/category.service';
import {CategoryModel} from '../../../../shared/model/category.model';
import {handleError} from '../../../../shared/util/error-handler';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {

  product: ProductModel;
  categories: CategoryModel[];

  public form: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();

  @ViewChild('input') inputRef: ElementRef;

  setupPolicyKeys: string[] = [];
  setupPolicyValues: string[] = [];
  get categoryId() {
    return this.data.category ? this.data.category.id : ''
  }

  constructor(public dialogRef: MatDialogRef<ProductPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private parseService: ParseService,
              private categoryService: CategoryService) {
    this.product = this.data.product;
  }

  ngOnInit() {
    this.initSafetyRules();
    this.initForm();
    this.getCategories();
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
          this.form.get('safetyRules').value
        ),
        newCategoryId: this.form.get('category').value,
        oldCategoryId: this.categoryId
      });
    }
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
    if (event.target.files.length > 0) {
      const files = event.target.files;
      for (let file of files) {
        let parseFile = new this.parseService.parse.File(file.name, file);
        parseFile.save().then((result) => {
          console.log(result.url());
          this.form.get('images').value.push(result.url());
        });
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.product.title, [
        Validators.required
      ]),
      price: this.formBuilder.control(this.product.price, [
        Validators.required
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
    })
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

  removeSafetyRule(index: number) {
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
}
