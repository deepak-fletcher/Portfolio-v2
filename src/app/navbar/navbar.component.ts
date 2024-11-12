import { Component } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { RouterServiceService } from '../services/router-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navButton = navButtons;
  public faHomeIcon = faHome;

  constructor(
    private router: Router,
    private routerService: RouterServiceService
  ) {}

  public ngOnInit(): void {
    this.routerService.newRouteDetected.subscribe((val) => {
      console.log(val);
    });
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
    }
  }
}

export enum navButtons {
  about = 'About',
  education = 'Education',
  experience = 'Experience',
  contact = 'Contact',
}
