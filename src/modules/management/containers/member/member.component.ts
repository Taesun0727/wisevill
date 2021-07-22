import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'modules/management/models/member'
import { MemberService } from 'modules/management/services/member.service'
import { map } from 'rxjs/operators';

let MEMBERS: Member[] = [
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
  collectionSize = 0;

  constructor(public router: Router,public ns: MemberService) {
   
   }

  ngOnInit(): void {
    this.refreshCountries();
    this.retrieveMembers();
  }
  retrieveMembers(): void {
    this.ns.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ... c.payload.doc.data()})
          )
        )
    ).subscribe(data => {
      this.members = data;
      this.collectionSize = data.length
    })
  }

  checkAllCheckBox(ev:any) {
    this.members.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.members.every(p => p.checked);
  }

  listDelSubmit(x: any){
    var delBtn = confirm(" 삭제하시겠습니까 ?");
    if ( delBtn == true ) {
      this.members.splice(x, 1 );
    }   
  }
  
  refreshCountries() {
    this.members = MEMBERS
      .map((member, i) => ({id: i + 1, ...member}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  enroll() {
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
