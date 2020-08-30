import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductCarouselService } from './../../shared/product-carousel/product-carousel.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  routerSubscription: any
  productFromUrl
  product
  slideConfig
  products = [
    {
      _id: 1,
      image: "https://icdn6.digitaltrends.com/image/digitaltrends/transparentbackground-1535x1024.jpg",
      title: "dsgdfhgh",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 2,
      image: "https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/11/floral-dress-transparent-background.png?fit=600%2C600",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 3,
      image: "https://www.vingino.com/media/image/72/b8/34/SS20KGN30017_Hilany_Dark-Blue_FRONT.png",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 4,
      image: "https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/11/floral-dress-transparent-background.png?fit=600%2C600",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 5,
      image: "https://icdn6.digitaltrends.com/image/digitaltrends/transparentbackground-1535x1024.jpg",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 6,
      image: "https://primadonna.com.gr/wp-content/uploads/2019/05/IMG_20190507_112043.png",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 7,
      image: "https://i7.pngguru.com/preview/586/184/851/oxford-shoe-leather-dress-shoe-real-leather-shoes-men-s-products.jpg",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 8,
      image: "https://www.vingino.com/media/image/72/b8/34/SS20KGN30017_Hilany_Dark-Blue_FRONT.png",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 9,
      image: "https://w7.pngwing.com/pngs/165/582/png-transparent-t-shirt-dye-sublimation-printer-brand-product-t-shirt-purple-tshirt-logo.png",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 10,
      image: "https://joinedinlife.co.uk/wp-content/uploads/red-signature-front-01-1200x1200.png",
      title: "MEL & MOLLY",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    }

  ]
  constructor(private route: ActivatedRoute, private productService: ProductService, private carouselService: ProductCarouselService) { }

  ngOnInit(): void {
    this.slideConfig = this.carouselService.getMiniVerticallProductConfig();
    this.routerSubscription = this.route.params.subscribe(params => {
      this.productFromUrl = params;
      this.product = this.productService.getProduct(this.productFromUrl.productName);
      console.log(this.product)
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
