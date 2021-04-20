import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDateService } from '../../shared/services/location-date.service';
import { RoutingService } from '../../shared/services/routing.service';
import { ProductService } from '../../shared/services/product.service';
import { CategoryService } from '../../shared/services/category.service';
import { OrderService } from '../../shared/services/order.service';
import { OrderModel } from '../../shared/model/order.model';
import { ParseService } from '../../shared/services/parse.service';
import { OrderItemModel } from '../../shared/model/order-item.model';
import { InitializerService } from '../../shared/services/initializer.service';
import { AdditionCategoryService } from '../../shared/services/addition-category.service';
import { from, of, zip } from 'rxjs';
import { ShippingHttpService } from '../../shared/services/shipping-http.service';
import { NgxGalleryAnimation } from "@kolkov/ngx-gallery";
let RentalItemComponent = class RentalItemComponent {
    constructor(titleService, metaService, locationService, route, router, routingService, productService, categoryService, orderService, initializerService, parseService, shippingService, additionCategoryService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.routingService = routingService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.orderService = orderService;
        this.initializerService = initializerService;
        this.parseService = parseService;
        this.shippingService = shippingService;
        this.additionCategoryService = additionCategoryService;
        this.galleryOptions = [
            { 'imageSize': 'contain' },
            {
                width: '450px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            { 'breakpoint': 500, 'width': '300px', 'height': '300px', 'thumbnailsColumns': 3 },
            { 'breakpoint': 300, 'width': '100%', 'height': '200px', 'thumbnailsColumns': 2 },
        ];
        this.customOptions = {
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            merge: true,
            lazyLoad: true,
            autoWidth: true,
            margin: 10,
            navSpeed: 700,
            navText: ['<', '>'],
            responsive: {
                400: {
                    items: 1
                },
                940: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            },
            nav: true
        };
        this.galleryImages = [];
        this.reviewsCount = 0;
        this.relatedProducts = [];
        this.quantity = 0;
        this.title$ = this.route.paramMap;
        this.additionCategories = [];
        this.selectedAdditions = new Map();
    }
    ngOnInit() {
        this.getRouteParams();
        this.routingService.itemIdSubject.subscribe(res => {
            // console.log(res);
        });
    }
    getSelectedProduct(productPatch) {
        this.productService.getProductByPatch(productPatch)
            .then((res) => {
            if (!res) {
                this.router.navigate(['page-not-found']);
            }
            this.initAdditions(res);
            this.selectedProduct = res;
            this.titleService.setTitle(res.title);
            if (res.metaDescription || res.description) {
                this.metaService.addTag({ name: 'description', content: res.metaDescription ? res.metaDescription : res.description.substring(0, 150) });
            }
            this.categoryService.getCategoryByProductId(this.selectedProduct.id).then((res) => {
                this.itemCategory = res;
            });
            if (this.selectedProduct.relation && this.selectedProduct.relation.length > 0) {
                this.initRelatedProducts();
            }
            this.initGallery();
            this.locationService.isSpecified.subscribe(specified => {
                specified ? this.quantities = from(this.getQuantities()) : this.quantities = this.getQuantitiesByCount();
            });
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            $('.css3-spinner').remove();
        }, 1500);
    }
    getRouteParams() {
        this.title$.subscribe((params) => {
            this.getSelectedProduct(params.get('title'));
        });
    }
    navigate(id, title) {
        this.router.navigate(['/rental', title], { queryParams: { id: id } });
    }
    initGallery() {
        this.galleryImages = [];
        for (let image of this.selectedProduct.images) {
            this.galleryImages.push({
                small: image,
                medium: image,
                big: image
            });
        }
    }
    isSpecified() {
        return this.locationService.isSpecified;
    }
    getSetupPolicy() {
        return Array.from(this.selectedProduct.setupPolicy.keys());
    }
    getPrice(nightPrice, minPrice, minTime, price) {
        return this.locationService.getCalculation(nightPrice, minPrice, minTime, price);
    }
    getQuantitiesByCount() {
        let quantities = [];
        if (this.selectedProduct && this.selectedProduct.count > 0) {
            let i = 1;
            while (i <= this.selectedProduct.count) {
                quantities.push(i);
                i++;
            }
        }
        return of(quantities);
    }
    getQuantities() {
        return this.shippingService.getInaccessibleCountForProductInDate(this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime, this.selectedProduct.id)
            .then(res => {
            let quantities = [];
            let count = this.selectedProduct.count - res;
            if (count > 0) {
                let i = 1;
                while (i <= count) {
                    quantities.push(i);
                    i++;
                }
                // this.enableCheckout = true;
            }
            else {
                // this.enableCheckout = false;
            }
            return quantities;
        });
    }
    addToCart() {
        let selectedAdditions = this.getSelectedValues();
        let orderItem = new OrderItemModel(this.selectedProduct.id, this.quantity, selectedAdditions.map(value => value.id));
        let items = [];
        items.push(orderItem);
        let order = new OrderModel(this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime, this.parseService.getCurrentUser() ? this.parseService.getCurrentUser().id : null, this.locationService.locationDate.location, items);
        this.orderService.setOrder(order).subscribe(res => {
            if (!this.initializerService.orderModel.orderItems) {
                this.initializerService.orderModel.orderItems = [];
            }
            this.initializerService.orderModel.orderItems.push(...order.orderItems);
        });
    }
    productInCart() {
        if (this.initializerService.orderModel && this.initializerService.orderModel.orderItems) {
            for (let item of this.initializerService.orderModel.orderItems) {
                if (this.selectedProduct.id === item.productId) {
                    return true;
                }
            }
        }
        return false;
    }
    continueShopping() {
        this.router.navigate(['/rentals']);
    }
    goToCart() {
        this.router.navigate(['/cart']);
    }
    initAdditions(productModel) {
        let $obs = [];
        productModel.additionalCategories.forEach(value => {
            $obs.push(this.additionCategoryService.getAdditionalCategoryById(value));
        });
        zip(...$obs).subscribe((res) => {
            res.forEach(value => {
                this.selectedAdditions.set(value.id, []);
            });
            this.additionCategories = res;
        });
    }
    selectAddition(itemId, category) {
        if (Array.isArray(itemId)) {
            this.selectedAdditions.set(category.id, []);
            itemId.forEach(valueId => {
                this.setSelectedAdditions(valueId, category);
            });
        }
        else {
            if (!this.selectedAdditions.has(category.id)) {
                this.selectedAdditions.set(category.id, []);
            }
            this.setSelectedAdditions(itemId, category);
        }
    }
    getSelectedValues() {
        let selected = [];
        this.selectedAdditions.forEach(value => {
            selected.push(...value);
        });
        return selected;
    }
    setSelectedAdditions(itemId, category) {
        let item = category.additions.find(value => itemId == value.id);
        category.multiSelect ?
            this.selectedAdditions.get(category.id).indexOf(item) == -1 ?
                this.selectedAdditions.get(category.id).push(item) :
                this.selectedAdditions.set(category.id, this.selectedAdditions.get(category.id).filter(value => value.id != item.id))
            : this.selectedAdditions.set(category.id, [item]);
    }
    initRelatedProducts() {
        let relatedProducts$ = [];
        this.selectedProduct.relation.forEach(value => {
            relatedProducts$.push(from(this.productService.getProduct(value)));
        });
        zip(...relatedProducts$).subscribe(res => {
            this.relatedProducts.push(...res);
        });
    }
};
RentalItemComponent = __decorate([
    Component({
        selector: 'app-rental-item',
        templateUrl: './rental-item.component.html',
        styleUrls: ['./rental-item.component.css']
    }),
    __metadata("design:paramtypes", [Title,
        Meta,
        LocationDateService,
        ActivatedRoute,
        Router,
        RoutingService,
        ProductService,
        CategoryService,
        OrderService,
        InitializerService,
        ParseService,
        ShippingHttpService,
        AdditionCategoryService])
], RentalItemComponent);
export { RentalItemComponent };
//# sourceMappingURL=rental-item.component.js.map