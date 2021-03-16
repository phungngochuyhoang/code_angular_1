import { Component, OnInit} from '@angular/core';
import {COLOR_DATA} from '../app.mock-data';
import {Colors} from '../app.type';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colors = COLOR_DATA;

  color = "black";

  datetime = new Date();

  money = "1000";

  selectedColor?: Colors;


  onUpdateColor(color: string):void {
    this.color = color;
  }

  onSelect(text: Colors): void {
    this.selectedColor = text;
  }


}
