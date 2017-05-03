import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a routerLink="/">Home</a></li>
   <li><a routerLink="about">About</a></li>
    <li><a routerLink="portfollio">Portfollio</a></li>
     <li><a routerLink="faq">Faq</a></li>
      <li><a routerLink="contact">Contact</a></li>
  </ul>
  <h1>Hello {{name}}</h1><router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
