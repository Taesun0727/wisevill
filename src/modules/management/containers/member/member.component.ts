import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public router: Router) {
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

  createmember() {
    this.router.navigateByUrl('/management/member/enroll')
  }
  Checks: Array<any> = [
		{ name: '와이즈빌1', details: [  '개발팀','영업팀', ] },
		{ name: '와이즈빌2', details: [  '홍보팀','행정팀',  ] }
	];
    
	details: Array<any> | undefined; 

	changeCheck(check: any) { 
		
		this.details = this.Checks.find((chk: any) => chk.name == check).details; //Angular 11
	}
}
