import { Component, OnInit } from '@angular/core';
import { Code } from 'modules/management/models/code'

let CODES: Code[] = [
 
]

@Component({
  selector: 'sb-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  codes = CODES
  page = 1;
  pageSize = 4;
  collectionSize = CODES.length;

  constructor() {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  
  checkAllCheckBox(ev:any) {
    this.codes.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.codes.every(p => p.checked);
  }

  refreshCountries() {
    this.codes = CODES
      .map((code, i) => ({id: i + 1, ...code}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
