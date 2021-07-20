import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Workrecord } from '../models/workrecord';

@Injectable({
  providedIn: 'root'
})
export class WorkrecordService {

  
  workrecordsRef: AngularFirestoreCollection<any>|any ;
  workrecordRef: AngularFireObject<any> | undefined;

  dbPath = '/workrecord';

  constructor(private db: AngularFirestore) {
    this.workrecordsRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<Workrecord> {
    return <any>this.workrecordsRef;
  }

  AddWorkrecord(workrecord: Workrecord) {
    return this.workrecordsRef?.add({...workrecord});
  }


  UpdateWorkrecord(workrecord: Workrecord) {
    this.workrecordsRef?.update({
      date:workrecord.date,
      start: workrecord.start,
      end:workrecord.end,
      workroad: workrecord.workroad,
      check: workrecord.check,
})}}