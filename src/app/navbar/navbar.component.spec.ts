import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { NavbarComponent, navButtons } from './navbar.component';
import { Router } from '@angular/router';
import { noop, of } from 'rxjs';
import { RouterServiceService } from '../services/router-service/router-service.service';
import { MobileNavbarService } from '../services/mobile-navbar-service/mobile-navbar.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  class RouterStub {
    navigate = noop;
  }

  class RouterServiceStub{
    newRouteDetected = of();
  }

  class MobileNavbarServiceStub{
    navBarSubject = of();
    toggleNavBar = noop;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: RouterServiceService, useClass: RouterServiceStub },
        { provide: MobileNavbarService, useClass: MobileNavbarServiceStub },
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should navigate', () => {
    it('to the contact page', fakeAsync(inject([Router], (router: RouterServiceStub) => {
      spyOn(router as any, 'navigate');
      component.navigate(navButtons.contact);
      tick();
      expect((router as any).navigate).toHaveBeenCalledWith(['/contact']);
    })));
  });
});
