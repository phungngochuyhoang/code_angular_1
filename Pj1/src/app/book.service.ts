import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BOOK_DATA, STUDENTS_DATA } from './app.mock-data';
import { Books, Students } from './app.type';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBook(): Books[] {
    return BOOK_DATA;
  }

  getStudent(): Observable<Students[]> {
    const data = of(STUDENTS_DATA);
    return data;
  }

}
