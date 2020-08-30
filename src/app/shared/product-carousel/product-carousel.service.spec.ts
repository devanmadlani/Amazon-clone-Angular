import { TestBed } from '@angular/core/testing';

import { ProductCarouselService } from './product-carousel.service';

describe('ProductCarouselService', () => {
  let service: ProductCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
