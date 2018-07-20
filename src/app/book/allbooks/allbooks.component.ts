import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../service/book-service.service';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  constructor(private bookService:BookServiceService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((response) =>  {
      console.log(response);
    }
  )
  }

}
