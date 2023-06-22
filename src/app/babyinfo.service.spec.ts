import { TestBed } from '@angular/core/testing';

import { BabyinfoService } from './babyinfo.service';

describe('BabyinfoService', () => {
  let service: BabyinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
