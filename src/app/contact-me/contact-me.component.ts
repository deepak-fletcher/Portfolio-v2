import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public logos = [
    {location: 'assets/facebooklogo.png', link: 'https://www.facebook.com/deepakrao.fletcher/'}, 
    {location: 'assets/instagramlogo.png', link: 'https://www.instagram.com/deepak__fletcher/profilecard/?igsh=YWh2MWI1anFvYWdz'},
    {location: 'assets/linkedinlogo.png', link: 'https://www.linkedin.com/in/deepak-fletcher'},
    {location: 'assets/twitterlogo.png', link: 'https://x.com/DeepakR03572769?s=09'}
  ];
  public mailIcon = faMessage;

  public loadingComplete = false;
  public details = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    query: new FormControl('', [Validators.required])
  })

  constructor(){

  }
  ngOnInit(): void {
    this.preloadImages();

  }

  private preloadImages(): void {
    this.logos.forEach((logo, index) => {
      const img = new Image();
      img.src = logo.location;
      img.onload = () => this.onImageLoad(index);
    });
  }

  public onImageLoad(position: number){
    if(position === this.logos.length - 1){
      this.loadingComplete = true;
    }
  }

  public onSubmit(){
    console.log(this.details.value)
  }

  public openLink(url: string){
    window.open(url, '_blank');
  }
}
