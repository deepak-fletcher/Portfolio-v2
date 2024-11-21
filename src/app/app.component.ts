import { Component } from '@angular/core';
import { MobileNavbarService } from './services/mobile-navbar-service/mobile-navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio-v2';

  public navBarClosed = true;

  constructor(public mobileNavService: MobileNavbarService){}

  ngOnInit(): void {
    this.mobileNavService.navBarSubject.subscribe((value: boolean) => this.navBarClosed = value);
  }
}
