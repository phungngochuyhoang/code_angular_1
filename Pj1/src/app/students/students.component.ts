import { Component, OnInit, Input } from '@angular/core';
import { STUDENTS_DATA } from '../app.mock-data';
import {Colors} from '../app.type';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() colorName?: Colors;
  constructor() { }

  ngOnInit(): void {
  }

  title = "Component Students";

  students = STUDENTS_DATA;

  

  
}
