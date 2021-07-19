import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Member } from 'modules/management/models/member';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  membersRef: AngularFirestoreCollection<any>|any ;
  memberRef: AngularFireObject<any> | undefined;

  dbPath = '/member';

  constructor(private db: AngularFirestore) {
    this.membersRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<Member> {
    return <any>this.membersRef;
  }

  AddMember(member: Member) {
    return this.membersRef?.add({...member});
  }


  UpdateMember(member: Member) {
    this.membersRef?.update({
      company:member.company,
      department:member.department,
      rank: member.rank,
      name: member.name,
      task: member.task,
      auth:member.auth,
      control:member.control,
      checked: member.checked,
  })
  }
}