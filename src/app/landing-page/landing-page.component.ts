import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit {
  public showBitmoji = false;
  public showName = false;
  public showMoreInfo = false;
  public hoveringBitmoji = false;
  public disablePointerevents = false;
  public hoveringTimer: any;
  public bitmojiPath = "../../assets/bitmoji.png"

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.showBitmoji = true;
      this.showName = true;
    })
  }

  public hovering(){
    this.hoveringTimer = setTimeout(()=>{
      this.hoveringBitmoji = true;
    }, 700)
  }

  public hoveringComplete(){
    clearTimeout(this.hoveringTimer);
    this.hoveringBitmoji = false;
    this.showBitmoji = false;
    setTimeout(()=>{
      this.showBitmoji = true;
    })
  }

  public showMore(){
    this.disablePointerevents = true;
    if(this.showMoreInfo){
      this.showMoreInfo = false;
      this.bitmojiPath = "../../assets/bitmoji.png"
    }else{
      this.showMoreInfo = true;
      this.bitmojiPath = "../../assets/professionalBitmoji.png"
    }
    setTimeout(()=>{
      this.disablePointerevents = false;
    }, 1000)
  }
}
