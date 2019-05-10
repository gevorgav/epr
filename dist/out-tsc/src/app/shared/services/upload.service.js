import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ParseService } from "./parse.service";
import { from, throwError } from "rxjs";
var UploadService = /** @class */ (function () {
    function UploadService(parseService) {
        this.parseService = parseService;
    }
    UploadService_1 = UploadService;
    UploadService.prototype.uploadFile = function (file) {
        if (file.size < UploadService_1.FILE_MAX_SIZE) {
            var parseFile = new this.parseService.parse.File(file.name, file);
            return from(parseFile.save().then(function (result) {
                return {
                    fileName: UploadService_1.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
                    file: result
                };
            }));
        }
        else {
            return throwError(new Error("File size should be less that " + UploadService_1.FILE_MAX_SIZE_NAME));
        }
    };
    UploadService.prototype.uploadFileWithCustomName = function (name, file) {
        if (file.size < UploadService_1.FILE_MAX_SIZE) {
            var parseFile = new this.parseService.parse.File(name, file);
            return from(parseFile.save().then(function (result) {
                return {
                    fileName: UploadService_1.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
                    file: result
                };
            }));
        }
        else {
            return throwError(new Error("File size should be less that " + UploadService_1.FILE_MAX_SIZE_NAME));
        }
    };
    var UploadService_1;
    UploadService.DOMAIN_NAME = 'https://entertainmentpartyrentals.com/';
    UploadService.FILE_MAX_SIZE = 1024 * 1024;
    UploadService.FILE_MAX_SIZE_NAME = '1 MB';
    UploadService = UploadService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], UploadService);
    return UploadService;
}());
export { UploadService };
//# sourceMappingURL=upload.service.js.map