import { Component, OnInit } from '@angular/core';
import { Workrecord } from 'modules/mypage/models/workrecord'

let WORKRECORDS: Workrecord[] = [
  
  
]

@Component({
  selector: 'sb-workrecord',
  templateUrl: './workrecord.component.html',
  styleUrls: ['./workrecord.component.scss']
})
export class WorkrecordComponent implements OnInit {
  workrecords = WORKRECORDS;
  totalwork = 0;
  page = 1;
  pageSize = 4;
  collectionSize = WORKRECORDS.length;

  constructor() { 
    this.refreshCountries()
   }

  ngOnInit() {
  }

  search() {
    for(let i = 0; i < this.workrecords.length; i++) {
      this.totalwork = this.totalwork + this.workrecords[i].workroad
    }
  }

  refreshCountries() {
    this.workrecords = WORKRECORDS
      .map((workrecord, i) => ({id: i + 1, ...workrecord}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
