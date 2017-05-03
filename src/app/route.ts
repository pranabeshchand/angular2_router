import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { UserComponent } from "./components/user.component";
import { AboutComponent } from "./components/about.component";
import { PortfollioComponent } from "./components/portfollio.component";
import { ContactComponent } from "./components/contact.component";
import { FaqComponent } from "./components/faq.component";

const appRouters: Routes = [
  {
    path: "",
    component: UserComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "portfollio",
    component: PortfollioComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
