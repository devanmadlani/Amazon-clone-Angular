import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from './../../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavClose = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  panelOpenState = false;

  megaMenu =  [
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


  constructor(public authService: AuthService) { }

  ngOnInit(): void {
   this.authSubscription =  this.authService.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    })
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
