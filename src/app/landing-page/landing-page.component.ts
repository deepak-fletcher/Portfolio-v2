import { AfterViewInit, Component } from '@angular/core';
import { NgxTippyInstance, NgxTippyService } from 'ngx-tippy-wrapper';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit {
  public showBitmoji = false;
  public showName = false;
  public showMoreInfo = false;
  public disablePointerevents = false;
  public hoveringTimer: any;
  public bitmojiPath = "../../assets/professionalBitmoji.png"
  public instance: any;

  constructor(public tippyService: NgxTippyService){}

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.showBitmoji = true;
      this.showName = true;
    })
    this.instance = this.tippyService.getInstance('bitmoji-tooltip');
    this.tippyToggle();
  }

  public tippyToggle(){
    setTimeout(()=>{
      this.instance?.show();
      setTimeout(()=>{
        this.instance?.hide()
      }, 5000)
    }, 2000)
  }

  public showMore(){
    this.showBitmoji = false;
    this.disablePointerevents = true;
    this.instance?.hide()
    setTimeout(()=>{
      if(this.showMoreInfo){
        this.showMoreInfo = false;
        this.bitmojiPath = "../../assets/professionalBitmoji.png"
      }else{
        this.showMoreInfo = true;
        this.bitmojiPath = "../../assets/bitmoji.png"
      }
      this.tippyToggle()
    }, 500)
    setTimeout(()=>{
      this.disablePointerevents = false;;
      this.showBitmoji = true;
    }, 1000)
  }
}
