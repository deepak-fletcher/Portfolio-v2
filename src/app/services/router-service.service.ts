import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  public newRouteDetected = new BehaviorSubject<String>('');

  constructor(private router: Router) { 
    this.router.events.subscribe((val) => {
      if (val instanceof ResolveEnd) {  
        console.log(val.url)
        this.newRouteDetected.next(val.url)
      }
    })
  }
}
