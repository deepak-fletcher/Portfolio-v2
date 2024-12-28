import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  public logos = [
    'assets/facebooklogo.png',
    'assets/instagramlogo.png',
    'assets/linkedinlogo.png',
    'assets/xlogo.webp'
  ];
}
