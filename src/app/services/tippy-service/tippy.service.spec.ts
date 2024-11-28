import { TestBed } from '@angular/core/testing';

import { TippyService } from './tippy.service';

describe('TippyService', () => {
  let service: TippyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TippyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
