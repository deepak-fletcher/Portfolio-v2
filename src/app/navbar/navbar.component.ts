import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private routerService: RouterServiceService,
    private mobileNavbarService: MobileNavbarService,
  ) {}

  public ngOnInit(): void {
    this.routerService.newRouteDetected.subscribe((val) => {
      this.currentRoute = val.slice(1);
    });
    this.mobileNavbarService.navBarSubject.subscribe((val) => 
      this.menuClosed = val
    );
  }

  public navigate(toPage: navButtons) {
    switch (toPage) {
      case navButtons.contact:
        this.router.navigate(['/contact']);
        break;
      case navButtons.about:
        this.router.navigate(['/about']);
        break;
      case navButtons.experience:
        this.router.navigate(['/experience']);
        break;
      case navButtons.education:
        this.router.navigate(['/education']);
        break;
      case navButtons.home:
        this.router.navigate(['/welcome']);
        break;
    }
  }

  public openNavMenu(){
    this.mobileNavbarService.toggleNavBar();
  }
}

export enum navButtons {
  about = 'About',
  education = 'Education',
  experience = 'Experience',
  contact = 'Contact',
  home = 'Home',
  openMenu = 'OpenMenu'
}
