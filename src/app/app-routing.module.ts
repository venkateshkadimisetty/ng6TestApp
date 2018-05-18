import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    {
      path: 'sign-in',
      component: SignInComponent,
    },
    { 
      path: 'dashboard', 
      loadChildren: './dashboard/dashboard.module#DashboardModule' 
    }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
