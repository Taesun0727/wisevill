import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Db } from '../models/db';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  dbsRef: AngularFirestoreCollection<any>|any ;
  dbRef: AngularFireObject<any> | undefined;

  dbPath = '/smartfactorydb';

  constructor(private db: AngularFirestore) {
    this.dbsRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<Db> {
    return <any>this.dbsRef;
  }

  AddDb(db: Db) {
    return this.dbsRef?.add({...db});
  }


  UpdateDb(db: Db) {
    this.dbsRef?.update({
      company:db.company,
      type:db.type,
      cnserver: db.cnserver,
      name: db.name,
      host: db.host,
      port:db.port,
      kind:db.kind,
      shortkut:db.shortkut,
      manage:db.manage,
      checked: db.checked,
  })
  }
}
