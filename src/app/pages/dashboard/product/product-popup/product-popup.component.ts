import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ProductModel} from "../../../../shared/model/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ParseService} from "../../../../shared/services/parse.service";

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {

  product: ProductModel;

  public form: FormGroup;

  @ViewChild('input') inputRef: ElementRef;
  imagePreviews: any[] = [];
  videoPreview: any[] = [];

  constructor(public dialogRef: MatDialogRef<ProductPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private parseService: ParseService) {
    this.product = this.data.product;
  }

  get editMode() {
    return this.product && this.product.id;
  }

  ngOnInit() {
    this.initForm();
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
          this.form.get('setupPolicy').value,
          this.form.get('instructions').value,
          this.product.video,
          this.form.get('safetyRules').value
        )
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
    console.log(src);
    console.log(this.form.get('images').value);
    console.log(this.form.get('images').value.filter(item => item !== src));
    this.form.get('images').setValue(this.form.get('images').value.filter(item => item !== src));
    console.log('a');
    console.log(this.form.get('images').value);
  }

  filterImagePreviews(del) {
    this.imagePreviews = this.imagePreviews.filter(item => item != del);
  }

  onFileUpload(event){
    if (event.target.files.length > 0) {
      const files = event.target.files;
      for (let file of files) {
        // const reader = new FileReader()
        // reader.onload = () => {
        //   this.imagePreviews.push({preview: reader.result, path: file.lastModified + file.name, file: file});
        // };
        // reader.readAsDataURL(file)
        let parseFile = new this.parseService.parse.File(file.name, file);
        let promise = parseFile.save().then((result) => {
          console.log(result.url());
          this.form.get('images').value.push(result.url());
        });
      }

    }
  }

  private initForm() {
    this.form = new FormGroup({
      title: new FormControl(this.product.title, [
        Validators.required
      ]),
      price: new FormControl(this.product.price, [
        Validators.required
      ]),
      description: new FormControl(this.product.description, [

      ]),
      itemSize: new FormControl(this.product.itemSize, [

      ]),
      isHotDeal: new FormControl(this.product.isHotDeal, [

      ]),
      isNew: new FormControl(this.product.isNew, [

      ]),
      rentalTerms: new FormControl(this.product.rentalTerms, [

      ]),
      spaceRequired: new FormControl(this.product.spaceRequired, [

      ]),
      setupPolicy: new FormControl(this.product.setupPolicy, [

      ]),
      instructions: new FormControl(this.product.instructions, [

      ]),
      safetyRules: new FormControl(this.product.safetyRules, [

      ]),
      images: new FormControl(this.product.images, [

      ]),
      video: new FormControl(this.product.video, [

      ]),
    })
  }
}
