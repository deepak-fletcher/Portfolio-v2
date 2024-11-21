import { TestBed } from '@angular/core/testing';

import { MobileNavbarService } from './mobile-navbar.service';

describe('MobileNavbarService', () => {
  let service: MobileNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
