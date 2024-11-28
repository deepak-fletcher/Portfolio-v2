import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MobileNavbarService, navButtons } from 'src/app/services/mobile-navbar-service/mobile-navbar.service';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent {  

  public faCloseIcon = faClose;
  public navButtons = navButtons;

  constructor(public mobileNavbarService: MobileNavbarService){

  }

  public routeToComponent(value: navButtons){
    this.mobileNavbarService.navigate(value);
    this.mobileNavbarService.toggleNavBar()
  }
}
