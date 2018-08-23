import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { BookRoutingModule } from './book-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { AllbooksComponent } from './allbooks/allbooks.component';

@NgModule({
  imports: [CommonModule, BookRoutingModule, MaterialModule],
  declarations: [CreateBookComponent, AllbooksComponent]
})
export class BookModule {}
