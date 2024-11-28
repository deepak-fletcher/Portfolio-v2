import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileNavbarService {
  public navBarClosed = true;
  public navBarSubject = new BehaviorSubject<boolean>(this.navBarClosed);

  constructor(public router: Router) {}

  public toggleNavBar() {
    this.navBarClosed = !this.navBarClosed;
    this.navBarSubject.next(this.navBarClosed);
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
}

export enum navButtons {
  about = 'About',
  education = 'Education',
  experience = 'Experience',
  contact = 'Contact',
  home = 'Home',
  openMenu = 'OpenMenu'
}
