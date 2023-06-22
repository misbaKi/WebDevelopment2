import { TestBed } from '@angular/core/testing';

import { VacinfoService } from './vacinfo.service';

describe('VacinfoService', () => {
  let service: VacinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
