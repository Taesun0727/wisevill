import { Component, Input, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';


let data
@Component({
  selector: 'sb-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit{
  bdate = {};
  Gfromdate = {};
  Gtodate = {};
 
  constructor() { }

  ngOnInit() {
    (document.getElementById("am_working") as HTMLInputElement).innerHTML = "재직중",
    this.Gfromdate = {
      "year": 2021,
      "month": 10,
      "day": 10
    },
    this.Gtodate = {
      "year": 2021,
      "month": 11,
      "day": 20
    };
  }

  changedate(value: JSON) {
    this.bdate = value;
  }
  Gfromdatechange(value: NgbDate){
    this.Gfromdate = value;
  }

  Gtodatechange(value: NgbDate){
    this.Gtodate = value;
  }
  
  modify() {
    console.log(this.bdate)
    console.log(this.Gfromdate)
    console.log(this.Gtodate)
  }

  set() {
  }

}
