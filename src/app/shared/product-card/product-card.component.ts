import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.state';
import * as ProductActions from './../../actions/product.actions'
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnChanges {

  @Input() product;
  @Input() showProductDescripton: boolean = true;
  @Input() imageClass: string = 'img-size-child';
  @Input() type = '';
  title = 'hello-world';
  loading = false;
  isSucessButton = false;
  ProductImage = null;
  products: any[];

  constructor(private cartService: CartService, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
  }

  addToCart(product) {
    this.cartService.updateCart(product);


    this.cartService.addProductToCart(product)
    this.store.select('product').subscribe((state => this.products = state))
  }

  showProduct(product: Product) {
    console.log(product)
    // this.router.navigate(['/product/' + product.title]);
  }


  save(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.isSucessButton = true
      setTimeout(() => {
        this.isSucessButton = false
      }, 1000);
    }, 1000);
  }

}
