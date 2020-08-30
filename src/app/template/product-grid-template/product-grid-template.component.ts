import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-grid-template',
  templateUrl: './product-grid-template.component.html',
  styleUrls: ['./product-grid-template.component.scss']
})
export class ProductGridTemplateComponent implements OnInit {
  @Input() products;
  @Input() showProductDescripton:boolean = true;
  @Input() type = '';
  constructor() { }

  ngOnInit(): void {
  }

}
