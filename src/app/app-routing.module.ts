import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
//testing
const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path: 'login',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
