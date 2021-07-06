import { Component, OnInit } from '@angular/core';
import { Member } from 'modules/management/models/member'

let MEMBERS: Member[] = [
  {
    company: "와이즈빌",
    department: "개발팀",
    rank: "사원",
    name: "홍길동",
    task: "개발",
    auth: "관리자",
    checked: false  
  },
  {
    company: "와이즈빌",
    department: "개발팀",
    rank: "인턴",
    name: "홍길동",
    task: "개발",
    auth: "관리자",
    checked: false  
  },
]

@Component({
  selector: 'sb-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  members = MEMBERS
  page = 1;
  pageSize = 4;
  collectionSize = MEMBERS.length;

  constructor() {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev:any) {
    this.members.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.members.every(p => p.checked);
  }
  
  refreshCountries() {
    this.members = MEMBERS
      .map((member, i) => ({id: i + 1, ...member}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
