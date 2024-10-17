import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  public newRouteDetected = new Subject<String>();

  constructor(private router: Router) { 
    this.router.events.subscribe((val) => {
      if (val instanceof ResolveEnd) {  
        this.newRouteDetected.next(val.url)
      }
    })
  }
}
