import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  worksRef: AngularFirestoreCollection<any>|any ;
  workRef: AngularFireObject<any> | undefined;

  dbPath = '/work';

  constructor(private db: AngularFirestore) {
    this.worksRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<Work> {
    return <any>this.worksRef;
  }

  AddWork(work: Work) {
    return this.worksRef?.add({...work});
  }


  UpdateWork(work: Work) {
    this.worksRef?.update({
      date:work.date,
      name: work.name,
      department:work.department,
      time: work.time,
      remark:work.remark,
      checked: work.checked,
})}}