import { Component, OnInit } from '@angular/core';
import { Workrecord } from 'modules/mypage/models/workrecord'

let WORKRECORDS: Workrecord[] = [
  {
    date: "2021.06.23",
    start: "09:00",
    end: "18:00",
    workroad: "8",
    check: "",
    
  },
  {
    date: "2021.06.24",
    start: "09:00",
    end: "18:00",
    workroad: "8",
    check: "",
   
  },
  {
    date: "2021.06.25",
    start: "09:00",
    end: "18:00",
    workroad: "8",
    check: "",
    
  },
]

@Component({
  selector: 'sb-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.scss']
})
export class WorkrecordComponent implements OnInit {
  workrecords = WORKRECORDS;

  constructor() {  }

  ngOnInit() {
  }


}
