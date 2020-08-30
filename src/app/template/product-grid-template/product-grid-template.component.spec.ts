import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridTemplateComponent } from './product-grid-template.component';

describe('ProductGridTemplateComponent', () => {
  let component: ProductGridTemplateComponent;
  let fixture: ComponentFixture<ProductGridTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGridTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
