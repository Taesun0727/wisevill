import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'modules/management/models/member'
import { MemberService } from '@modules/management/services/member.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'sb-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {
  studentsRef: AngularFireList<any> | undefined;
  studentRef: AngularFireObject<any> | undefined;

  public membersForm: FormGroup|any;

  constructor(public router: Router,public membercrud: MemberService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.memberForm();
    console.log(this.membercrud.getAll())
  }
 
  memberForm() {
    this.membersForm = this.fb.group({
      company:[''],
      department:[''],
       position:[''],
       name:[''],
      task:[''],
       level:[''],
       control:[''],
       checked: [''],
    })
  }
  get company() {
    return this.membersForm.get('company')
  }
  get department() {
    return this.membersForm.get('department')
  }
  get position() {
    return this.membersForm.get('position')
  }
  get name() {
    return this.membersForm.get('name')
  }
  get task() {
    return this.membersForm.get('task')
  }
  get level() {
    return this.membersForm.get('level')
  }  
 
  ResetForm() {
    this.membersForm.reset();
  }

  golist() {
    this.router.navigateByUrl('/member')
  }

  save() {
    this.membercrud.AddMember(this.membersForm.value);
    this.router.navigateByUrl('/member')
  }

  Checks: Array<any> = [
		{ name: '와이즈빌1', details: [  '개발팀','영업팀', ] },
		{ name: '와이즈빌2', details: [  '홍보팀','행정팀',  ] }
	];
    
	details: Array<any> | undefined; 

	changeCheck(check: any) { 
		
		this.details = this.Checks.find((chk: any) => chk.name == check).details; //Angular 11
	}
  cnlth() {
    this.router.navigateByUrl('/managements/member')
  }

  AddStudent(student: Member) {

  }

}
