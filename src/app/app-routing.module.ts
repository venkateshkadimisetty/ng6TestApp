import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import { AuthGuardService as AuthGuard } from './shared/auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './shared//auth/role-guard.service';
const routes: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    {
      path: 'sign-in',
      component: SignInComponent,
    },
    { 
      canActivate: [AuthGuard], 
      path: 'dashboard', 
      loadChildren: './dashboard/dashboard.module#DashboardModule' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
