import { Component, OnInit } from '@angular/core';
import { Workrecord } from 'modules/mypage/models/workrecord'
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';



let WORKRECORDS: Workrecord[] = [
  {
    date: "2021.06.23",
    start: "09:00",
    end: "18:00",
    workroad: "8",
    check: "",
    checked: false,
  },
  {
    date: "2021.06.24",
    start: "09:00",
    end: "18:00",
    workroad: "8",
    check: "",
    checked: false,
  },
  {
    date: "2021.06.25",
    start: "09:00",
    end: "18:00",
    workroad: "8",
    check: "",
    checked: false,
  },
]

@Component({
  selector: 'sb-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.scss']
})
export class WorkrecordComponent implements OnInit {
  workrecords = WORKRECORDS;
  page = 1;
  pageSize = 4;
  collectionSize = WORKRECORDS.length;

  bdate = {};
  Gfromdate = {};
  Gtodate = {};

  constructor() {  }

  ngOnInit() {
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
  Gfromdatechange(value: NgbDate) {
    this.Gfromdate = value;
  }

  Gtodatechange(value: NgbDate) {
    this.Gtodate = value;
  }

  modify() {
    console.log(this.bdate)
    console.log(this.Gfromdate)
    console.log(this.Gtodate)
  }

  set() {
  }
  checkAllCheckBox(ev:any) {
    this.workrecords.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.workrecords.every(p => p.checked);
  }

  

}
