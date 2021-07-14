import { Component, OnInit } from '@angular/core';
import { Member } from 'modules/management/models/member'
@Component({
  selector: 'sb-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
