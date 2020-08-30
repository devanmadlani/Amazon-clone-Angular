import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as ProductActions from './../actions/product.actions'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cartProductList = [];
  constructor(private store: Store<AppState>) { }


  updateCart(product: any) {
    let cartList: any[] = this.cartChange.getValue();
    if (cartList.length === 0) {
      this.cartChange.next([{ ...product, num: 1 }]);
      return;
    }

    let isNewProduct = true;

    const newCartList: any[] = cartList.map((prod) => {
      if (prod._id === product._id) {
        prod.num++;
        isNewProduct = false;
      }
      return prod;
    });

    if (isNewProduct) {
      newCartList.push({ ...product, num: 1 });
      this.cartChange.next(newCartList);
    }
    this.cartChange.next(newCartList);
  }

  addProductToCart(product: Product) {
    this.store.dispatch(new ProductActions.AddProductToCart(product));
  }

  removeProductFromCart(product: Product) {
    this.store.dispatch(new ProductActions.RemoveProductFromCart(product));
  }

  getAllCartProducts(): Observable<any> {
    // this.store.select('product').subscribe((state =>  console.log(state)))
    return this.store.select('product');
  }
  
}



