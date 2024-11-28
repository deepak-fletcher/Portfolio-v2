import { Component } from '@angular/core';
import { navButtons } from '../services/mobile-navbar-service/mobile-navbar.service';
import { faHome, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { RouterServiceService } from '../services/router-service/router-service.service';
import { MobileNavbarService } from '../services/mobile-navbar-service/mobile-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navButton = navButtons;
  public faHomeIcon = faHome;
  public faBarsIcon = faBars;
  public faCloseIcon = faClose;
  public currentRoute = '';
  public menuClosed = true;

  constructor(
    private routerService: RouterServiceService,
    public mobileNavbarService: MobileNavbarService,
  ) {}

  public ngOnInit(): void {
    this.routerService.newRouteDetected.subscribe((val) => {
      this.currentRoute = val.slice(1);
    });
    this.mobileNavbarService.navBarSubject.subscribe((val) => 
      this.menuClosed = val
    );
  }

  public openNavMenu(){
    this.mobileNavbarService.toggleNavBar();
  }
}
