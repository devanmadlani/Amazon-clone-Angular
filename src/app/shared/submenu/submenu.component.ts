import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  products = [
    {
      _id: 1,
      image: {
        src: '',
        srcOut: "./assets/elhar/product/product2.JPG",
        srcOn: "./assets/elhar/product/product1.JPG"
      },
      title: "dsgdfhgh",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    },
    {
      _id: 2,
      image: {
        src: '',
        srcOut: "./assets/elhar/product/product3.JPG",
        srcOn: "./assets/elhar/product/product4.JPG"
      },
      title: "dsgdfhgh",
      subTitle: "BALCONY SANDALS IN PALE PEACH SURI",
      amount: "Eur 400"
    }
  ]


  megaMenu = [
    {
      title: "Clothing",
      linkBlock: [
        {
          title: "CATEGORIES",
          links: [
            {
              title: "Clothing",
              url: ""
            },
            {
              title: "Shoes",
              url: ""
            },
            {
              title: "shirt",
              url: ""
            },
            {
              title: "Accessories",
              url: ""
            },
            {
              title: "Face + Body",
              url: ""
            },
            {
              title: "Back in stock",
              url: ""
            },
            {
              title: "Models at home",
              url: ""
            },
            {
              title: "Trending now",
              url: ""
            }
          ]
        }

      ],
      product: {

      }
    },
    {
      title: "Scarves",
      linkBlock: [
        {
          title: "CATEGORIES",
          links: [
            {
              title: "Material",
              url: ""
            },
            {
              title: "Brands",
              url: ""
            }
          ]
        }
      ]
    },
    {
      title: "Accessories",
      linkBlock: [
        {
          title: "CATEGORIES",
          links: [
            {
              title: "Eyewear",
              url: ""
            },
            {
              title: "Jewellery",
              url: ""
            },
            {
              title: "Home & Living",
              url: ""
            },
            {
              title: "Stationeries & Books",
              url: ""
            },
            {
              title: "Socks",
              url: ""
            },
            {
              title: "Travel & Lifestyle",
              url: ""
            }
          ]
        }
      ]
    },
    {
      title: "Beauty",
      linkBlock: [
        {
          title: "CATEGORIES",
          links: [
            {
              title: "Bath & Body",
              url: ""
            },
            {
              title: "Hair & Nails",
              url: ""
            },
            {
              title: "Makeup",
              url: ""
            },
            {
              title: "Skin Care",
              url: ""
            }
          ]
        }
      ]
    },
    {
      title: "Traditional Wear",
      linkBlock: [
        {
          title: "CATEGORIES",
          links: [
            {
              title: "Jubahs",
              url: ""
            },
            {
              title: "Kaftans",
              url: ""
            },
            {
              title: "Kebayas",
              url: ""
            },
            {
              title: "Kurungs",
              url: ""
            }
          ]
        }
      ]
    },
    {
      title: "Scarves",
      linkBlock: [
        {
          title: "CATEGORIES",
          links: [
            {
              title: "Material",
              url: ""
            },
            {
              title: "Brands",
              url: ""
            }
          ]
        }
      ]
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
