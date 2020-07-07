import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'boob',   redirectTo: '/homepage', pathMatch: 'full' }, // redirect to `first-component`,
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
