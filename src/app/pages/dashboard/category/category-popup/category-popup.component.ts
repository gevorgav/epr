import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryModel} from '../../../../shared/model/category.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ParseService} from '../../../../shared/services/parse.service';

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrls: ['./category-popup.component.css']
})
export class CategoryPopupComponent implements OnInit {

  category: CategoryModel;
  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup;

  @ViewChild('input') inputRef: ElementRef;

  constructor(public dialogRef: MatDialogRef<CategoryPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private parseService: ParseService) {
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
            this.form.get('imageUrl').value
          )
        }
      );
    }
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
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
        let parseFile = new this.parseService.parse.File(file.name, file);
        parseFile.save().then((result) => {
          this.form.get('imageUrl').setValue(result.url());
        });
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
    })
  }
}
