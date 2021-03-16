import { Component, OnInit } from '@angular/core';
import { Books, Students } from '../app.type';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getMyBook();
    this.getMyStudent();
  }

  myBooks: Books[] = [];

  myStudent: Students[] = [];

  getMyBook(): void {
    this.myBooks = this.bookService.getBook();
  }

  getMyStudent(): void {
    this.bookService.getStudent()
    .subscribe(data => this.myStudent = data);  
  }

}
