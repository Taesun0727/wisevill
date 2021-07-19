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
      number: member.number,
      name: member.name,
      working: member.working,
      work_sdate: member.work_sdate,
      work_edate: member.work_edate,
      birth_date: member.birth_date,
      break_cnt: member.break_cnt,
      break_cnt2: member.break_cnt2,
      position: member.position,
      extension: member.extension,
      card_num: member.card_num,
      tel: member.tel,
      phone: member.phone,
      email: member.email,
      post: member.post,
      addr1: member.addr1,
      addr2: member.addr2,
      img: member.img,
      comment: member.comment,
      sign_img: member.sign_img,
      break_use_cnt: member.break_use_cnt,
      level:member.level,
      modify: member.modify,
      checked: member.checked
  })
  }
}