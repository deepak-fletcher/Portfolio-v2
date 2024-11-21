import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MobileNavbarService } from './services/mobile-navbar-service/mobile-navbar.service';
import { noop, of } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


class MobileNavbarServiceStub{
  navBarSubject = of();
  toggleNavBar = noop;
}

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [{ provide: MobileNavbarService, useClass: MobileNavbarServiceStub }],
    declarations: [AppComponent, NavbarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio-v2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio-v2');
  });
});
