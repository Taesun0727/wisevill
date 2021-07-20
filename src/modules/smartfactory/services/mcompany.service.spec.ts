import { TestBed } from '@angular/core/testing';

import { McompanyService } from './mcompany.service';

describe('McompanyService', () => {
  let service: McompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
