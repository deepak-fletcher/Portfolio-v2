import { Injectable } from '@angular/core';
import { NgxTippyProps } from 'ngx-tippy-wrapper';

@Injectable({
  providedIn: 'root'
})
export class TippyService {

  public defaultTippyProps: NgxTippyProps = {
    placement: 'top',
    arrow: 'true',
    animation: 'fade',
    duration: [300, 250],
  }

  constructor() { }

  public getDefaultTippyProps():NgxTippyProps{
    return this.defaultTippyProps;
  }
}
