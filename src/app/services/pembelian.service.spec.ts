import { TestBed } from '@angular/core/testing';

import { PembelianService } from './pembelian.service';

describe('PembelianService', () => {
  let service: PembelianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PembelianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
