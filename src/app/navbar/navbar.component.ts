import { Component } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { RouterServiceService } from '../services/router-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navButton = navButtons;
  public faHomeIcon = faHome;

  constructor(private router: Router, private routerService: RouterServiceService){
  }

  public ngOnInit(): void {
    this.routerService.newRouteDetected.subscribe((val) => {
        console.log(val)
    })
  }

  public reRoute(toPage: navButtons){
    if(toPage === navButtons.contact){
      this.router.navigate(['/contact'])
    }
  }
}


export enum navButtons{
about='About',
education='Education',
experience='Experience',
contact='Contact',
}