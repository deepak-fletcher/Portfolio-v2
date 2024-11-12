import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterViewInit {
  public showBitmoji = false;
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.showBitmoji = true;
    })
  }
}
