import { Component } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navButton = navButtons;
  public faHomeIcon = faHome;

  constructor(private router: Router){
  }

  public ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof ResolveEnd) {  
        console.log(val)
      }
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