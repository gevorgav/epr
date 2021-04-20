import { __decorate } from "tslib";
/**
 * @author Gevorg Avetisyan on 4/20/2019.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let RoutingService = class RoutingService {
    constructor() {
        this.itemIdSubject = new Subject();
        this.categoryIdSubject = new Subject();
    }
};
RoutingService = __decorate([
    Injectable()
], RoutingService);
export { RoutingService };
//# sourceMappingURL=routing.service.js.map