import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';

const routes: Routes = [
  {path: '',
    children: [{ path: '', redirectTo: 'create-student', pathMatch: 'full' },
    {
      path: 'create-student',
      component: CreateStudentComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
