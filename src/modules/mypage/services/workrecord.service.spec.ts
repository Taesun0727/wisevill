import { TestBed } from '@angular/core/testing';

import { WorkrecordService } from './workrecord.service';

describe('WorkrecordService', () => {
  let service: WorkrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
