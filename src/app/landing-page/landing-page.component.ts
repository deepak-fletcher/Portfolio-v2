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
  public disablePointerevents = false;
  public hoveringTimer: any;
  public bitmojiPath = "../../assets/professionalBitmoji.png"

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.showBitmoji = true;
      this.showName = true;
    })
  }

  public showMore(){
    this.showBitmoji = false;
    this.disablePointerevents = true;
    setTimeout(()=>{
      if(this.showMoreInfo){
        this.showMoreInfo = false;
        this.bitmojiPath = "../../assets/professionalBitmoji.png"
      }else{
        this.showMoreInfo = true;
        this.bitmojiPath = "../../assets/bitmoji.png"
      }
    }, 500)
    setTimeout(()=>{
      this.disablePointerevents = false;;
      this.showBitmoji = true;
    }, 1000)
  }
}
