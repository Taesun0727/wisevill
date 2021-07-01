import { Component, OnInit } from '@angular/core';
import { Code } from 'modules/management/models/code'

let CODES: Code[] = [
  {
    id: "인턴",
    typename: "권한코드",
    datailcode: "dlsxjs",
    codename: "INTERN",
    nickname: "인턴코드",
    checked: false
  },
  {
    id: "관리자",
    typename: "권한코드",
    datailcode: "rhksflwk",
    codename: "ADMIN",
    nickname: "관리자코드",
    checked: false
  }
]

@Component({
  selector: 'sb-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  codes = CODES
  constructor() { }

  ngOnInit(): void {
  }

  
  checkAllCheckBox(ev:any) {
    this.codes.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.codes.every(p => p.checked);
  }

}
