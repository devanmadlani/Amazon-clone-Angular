import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from './../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() cartToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  cartCount = 0;
  cartSubscription: Subscription;

  constructor(public authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAllCartProducts().subscribe(state => this.cartCount = state.length)

    // this.cartSubscription = this.cartService.cartChange.subscribe((val) => {
    //   if (val) {
    //     this.cartCount = val.length;
    //   }
    // })

    this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus
    })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }
  onToggleCart() {
    this.cartToggle.emit()
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

}
