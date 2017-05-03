import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent } from "./components/about.component";
import { PortfollioComponent } from "./components/portfollio.component";
import { ContactComponent } from "./components/contact.component";
import { FaqComponent } from "./components/faq.component";

import { routing } from './route';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, ContactComponent, PortfollioComponent, FaqComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
