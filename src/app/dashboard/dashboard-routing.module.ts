import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  {path: '',
    component: DashboardComponent, 
    children: [{ path: '', redirectTo: 'book', pathMatch: 'full' },
               {  path: 'book',
                  loadChildren: '../book/book.module#BookModule' 
                },
                {  path: 'student',
                  loadChildren: '../student/student.module#StudentModule' 
                }
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
