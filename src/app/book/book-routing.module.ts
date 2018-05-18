import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';

const routes: Routes = [
  {path: '',
  children: [{ path: '', redirectTo: 'create-book', pathMatch: 'full' },
  {
    path: 'create-book',
    component: CreateBookComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
