import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input() products;
  @Input() slideConfig;
  constructor() { 
  }

  ngOnInit(): void {
  }

  title = '';


  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfigp = {
    "slidesToShow": 6,
    "slidesToScroll": 2,
    "nextArrow": "<div class='nav-btn next-horizontal-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-horizontal-slide'></div>",
    "dots": false,
    "infinite": true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


}
