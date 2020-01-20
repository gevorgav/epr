import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SettingsService} from '../../../shared/services/settings.service';
import {SettingsModel} from '../../../shared/model/settings.model';
import {UploadService} from '../../../shared/services/upload.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public settings: SettingsModel;
  private formBuilder: FormBuilder = new FormBuilder();
  public form: FormGroup;
  public fileMaxSizeErrorMessage: string;
  public saveSuccess: boolean = false;
  public fileSizes = 'Optimal image sizes:   Width: 1720 pixels, Height: 1105 pixels';
  public isReady: boolean = false;
  @ViewChild('input1') inputRef1: ElementRef;
  @ViewChild('input2') inputRef2: ElementRef;
  @ViewChild('input3') inputRef3: ElementRef;

  constructor(private settingsService: SettingsService,
              private uploadService: UploadService) { }

  ngOnInit() {
    this.getSettings();

  }

  submit() {
    if (this.form.valid) {
          let settings = new SettingsModel(
            null,
            this.form.get('title').value,
            this.form.get('imageUrl1').value,
            this.form.get('imageUrl2').value,
            this.form.get('imageUrl3').value
          );
      this.settingsService.updateSettings(settings).subscribe(res=>{
        if (res){
          this.saveSuccess = true;
          setTimeout(()=> this.saveSuccess = false, 3000);
        }
      })
    } else {
      this.markFormGroupTouched(this.form)
    }
  }

  public onFileUpload(event: any, imageNumber: string){
    this.fileMaxSizeErrorMessage = '';
    this.uploadFile(event, this.form.get('imageUrl' + imageNumber));
  }

  public uploadFile(event:any, control: AbstractControl){
    if (event.target.files.length > 0) {
      this.uploadService.uploadFile(event.target.files[0])
        .subscribe(
          res => {
            control.setValue(res.fileName);
          },
          error => {
            if (error.fileMaxSize) {
              this.fileMaxSizeErrorMessage = error.message;
            }
          }
        );
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

  deleteImage(imageIndex: number){
    this.form.get('imageUrl'+imageIndex).setValue('');
  }


  triggerClick(imageIndex: number) {
    switch (imageIndex) {
      case 1:
        this.inputRef1.nativeElement.click();
        break;
      case 2:
        this.inputRef2.nativeElement.click();
        break;
      case 3:
        this.inputRef3.nativeElement.click();
        break;
    }
  }

  private getSettings() {
    this.settingsService.getSettings().subscribe(res=>{
      this.settings = res;
      this.initForm();
      this.isReady = true;
    })
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(this.settings.title, [
        Validators.required
      ]),
      imageUrl1: this.formBuilder.control(this.settings.imageUrl1 || '', [

      ]),
      imageUrl2: this.formBuilder.control(this.settings.imageUrl2 || '', [

      ]),
      imageUrl3: this.formBuilder.control(this.settings.imageUrl3 || '', [

      ]),
    })
  }
}
