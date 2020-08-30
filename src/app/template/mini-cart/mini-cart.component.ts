import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Subscription } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MiniCartComponent implements OnInit, OnDestroy {
  cartSubscription: Subscription;
  products
  cartQtyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  userForm
  ProductImage
  totalAmount: number;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // this.userForm = this.formBuilder.group({
    // 	profile: [null, [Validators.required]],
    // });

    this.cartService.getAllCartProducts().subscribe(state =>{ 
      this.products = state
      this.getCartTotal(this.products);
    })


    // this.cartSubscription = this.cartService.cartChange.subscribe((val) => {
    //   if (val) {
    //     this.products = val;
    //   }
    // })
  }


  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  decreaseValue() {

  }

  increaseValue() {

  }

  removeFromCart(product: Product) {
    this.cartService.removeProductFromCart(product)
  }

  getCartTotal(products) {
     this.totalAmount = products.reduce((amount, products) => amount + products.amount, 0);
  }
}
