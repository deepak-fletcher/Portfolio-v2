import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public navButton = navButtons;
}


export enum navButtons{
about='About',
education='Education',
experience='Experience',
contact='Contact',
}