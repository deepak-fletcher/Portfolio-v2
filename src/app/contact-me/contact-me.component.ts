import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public logos = [
    'assets/facebooklogo.png',
    'assets/instagramlogo.png',
    'assets/linkedinlogo.png',
    'assets/twitterlogo.png'
  ];

  public loadingComplete = false;

  constructor(){

  }
  ngOnInit(): void {
    this.preloadImages();
  }

  private preloadImages(): void {
    this.logos.forEach((logo, index) => {
      const img = new Image();
      img.src = logo;
      img.onload = () => this.onImageLoad(index);
    });
  }

  public onImageLoad(position: number){
    if(position === this.logos.length - 1){
      this.loadingComplete = true;
    }
  }
}
