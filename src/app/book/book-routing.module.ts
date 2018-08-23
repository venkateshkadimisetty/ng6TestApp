import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { AllbooksComponent } from './allbooks/allbooks.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'all-books', pathMatch: 'full' },
      {
        path: 'create-book',
        component: CreateBookComponent
      },
      {
        path: 'all-books',
        component: AllbooksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
