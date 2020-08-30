import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselService {

  horizontalProductConfig = {
    showProductDescripton: true,
    type: "img-size-child",
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

  miniVerticallProductConfig = {
    showProductDescripton: false,
    type: "img-size-parent",
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-verticle-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-verticle-slide'></div>",
    "dots": false,
    "infinite": false,
    vertical: true,
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
      }
    ]
  };

  miniHorizontalProductConfig = {
    showProductDescripton: false,
    type: "img-size-parent",
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-verticle-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-verticle-slide'></div>",
    "dots": false,
    "infinite": false,
    vertical: true,
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
      }
    ]
  };
  constructor() { }


  getHorizontalProductConfig() {
    return this.horizontalProductConfig;
  }

  getMiniVerticallProductConfig() {
    return this.miniHorizontalProductConfig;
  }

  getMiniHorizontalProductConfig() {
    this.miniHorizontalProductConfig;
  }


}
