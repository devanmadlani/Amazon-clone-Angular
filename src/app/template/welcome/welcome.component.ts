import { Component, OnInit } from '@angular/core';
import { PwaService } from '../../services/pwa.service';
import { ProductCarouselService } from '../../shared/product-carousel/product-carousel.service';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  bannerImage
  bannerImage1
  bannerImage2
  products
  brands
  slideConfig
  banner

  constructor(public Pwa: PwaService, private carouselService: ProductCarouselService, private productService: ProductService) { }

  ngOnInit(): void {
    this.slideConfig = this.carouselService.getHorizontalProductConfig();
    this.products = this.productService.getAllProducts();
    this.banner = this.productService.getBanners();
    this.brands = this.productService.getAllBrands();
  }



  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

}
