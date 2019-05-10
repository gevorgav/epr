import * as tslib_1 from "tslib";
/**
 * @author Gevorg Avetisyan on 4/20/2019.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var RoutingService = /** @class */ (function () {
    function RoutingService() {
        this.itemIdSubject = new Subject();
        this.categoryIdSubject = new Subject();
    }
    RoutingService = tslib_1.__decorate([
        Injectable()
    ], RoutingService);
    return RoutingService;
}());
export { RoutingService };
//# sourceMappingURL=routing.service.js.map