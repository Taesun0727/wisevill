import { Component, Input, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sb-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss']
})
export class MyDatePickerComponent implements OnInit {
  model : NgbDateStruct | any;
  @Input() item:NgbDateStruct | any;
  @Output() datechange = new EventEmitter<JSON>();
  
  constructor() { 
  }

  ngOnInit() {
    this.model = this.item
  }

  ngDoCheck() {
    this.datechange.emit(this.model);
  }

}

