import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-images',
  templateUrl: './brand-images.component.html',
  styleUrls: ['./brand-images.component.scss']
})
export class BrandImagesComponent implements OnInit {

  brand = ['./assets/elhar/brand/b1.png', './assets/elhar/brand/b2.png', './assets/elhar/brand/b3.png', './assets/elhar/brand/b4.png', './assets/elhar/brand/b5.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
