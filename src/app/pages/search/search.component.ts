import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchText: string;
  public products: ProductModel[] = [];

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res=>{
      this.searchText = res.get("searchText").trim();
      if (this.searchText){
        this.productService.getProductsByName(this.searchText).subscribe(res=>{
          this.products = res;
          if (!res || res.length == 0){
            let text = this.searchText[0].toUpperCase() + this.searchText.slice(1);
            this.productService.getProductsByName(text).subscribe(res=>{
              this.products = res;
            })
          }
        })

      }

    })
  }

}
