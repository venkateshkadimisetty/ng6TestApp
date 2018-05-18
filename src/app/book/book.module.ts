import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [CreateBookComponent]
})
export class BookModule { }
