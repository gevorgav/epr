var UploadService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ParseService } from "./parse.service";
import { from, throwError } from "rxjs";
let UploadService = UploadService_1 = class UploadService {
    constructor(parseService) {
        this.parseService = parseService;
    }
    uploadFile(file) {
        if (file.size < UploadService_1.FILE_MAX_SIZE) {
            let parseFile = new this.parseService.parse.File(this.genarateFileName(), file);
            return from(parseFile.save().then((result) => {
                return {
                    fileName: UploadService_1.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
                    file: result
                };
            }));
        }
        else {
            return throwError({ fileMaxSize: true, message: `File size should be less that ${UploadService_1.FILE_MAX_SIZE_NAME}` });
        }
    }
    uploadFileWithCustomName(name, file) {
        if (file.size < UploadService_1.FILE_MAX_SIZE) {
            let parseFile = new this.parseService.parse.File(name, file);
            return from(parseFile.save().then((result) => {
                return {
                    fileName: UploadService_1.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
                    file: result
                };
            }));
        }
        else {
            return throwError({ fileMaxSize: true, message: `File size should be less that ${UploadService_1.FILE_MAX_SIZE_NAME}` });
        }
    }
    genarateFileName() {
        return new Date().getTime() + Math.random().toString(36).substring(2, 15);
    }
};
UploadService.DOMAIN_NAME = 'https://entertainmentpartyrentals.com/';
UploadService.FILE_MAX_SIZE = 1024 * 1024;
UploadService.FILE_MAX_SIZE_NAME = '1 MB';
UploadService = UploadService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [ParseService])
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map