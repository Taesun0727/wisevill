import { TestBed } from '@angular/core/testing';

import { DcompanyService } from './dcompany.service';

describe('DcompanyService', () => {
  let service: DcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
