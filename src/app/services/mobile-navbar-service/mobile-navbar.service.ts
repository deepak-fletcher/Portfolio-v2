import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileNavbarService {
  public navBarClosed = true;
  public navBarSubject = new BehaviorSubject<boolean>(this.navBarClosed);

  constructor() {}

  public toggleNavBar() {
    this.navBarClosed = !this.navBarClosed;
    this.navBarSubject.next(this.navBarClosed);
  }
}
