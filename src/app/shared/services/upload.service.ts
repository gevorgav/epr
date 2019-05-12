import { Injectable } from '@angular/core';
import {ParseService} from "./parse.service";
import {from, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public static readonly DOMAIN_NAME = 'https://entertainmentpartyrentals.com/';

  public static readonly FILE_MAX_SIZE = 1024 * 1024;
  public static readonly FILE_MAX_SIZE_NAME = '1 MB';

  constructor(private parseService: ParseService) { }

  uploadFile(file: any): Observable<any> {
    if (file.size < UploadService.FILE_MAX_SIZE) {
      let parseFile = new this.parseService.parse.File(this.genarateFileName(), file);
      return from( parseFile.save().then((result) => {
        return {
          fileName: UploadService.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
          file: result
        }
      }));
    } else {
      return throwError({fileMaxSize: true, message: `File size should be less that ${UploadService.FILE_MAX_SIZE_NAME}`});
    }
  }

  uploadFileWithCustomName(name: string, file: any): Observable<any> {
    if (file.size < UploadService.FILE_MAX_SIZE) {
      let parseFile = new this.parseService.parse.File(name, file);
      return from( parseFile.save().then((result) => {
        return {
          fileName: UploadService.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
          file: result
        }
      }));
    } else {
      return throwError({fileMaxSize: true, message: `File size should be less that ${UploadService.FILE_MAX_SIZE_NAME}`});
    }
  }

  private genarateFileName(): string{
    return new Date().getTime() + Math.random().toString(36).substring(2, 15);
  }

}
