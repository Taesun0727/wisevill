import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Iot } from '../models/iot';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  iotsRef: AngularFirestoreCollection<any>|any ;
  iotRef: AngularFireObject<any> | undefined;

  dbPath = '/iot';

  constructor(private db: AngularFirestore) {
    this.iotsRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<Iot> {
    return <any>this.iotsRef;
  }

  AddIot(iot: Iot) {
    return this.iotsRef?.add({...iot});
  }


  UpdateIot(iot: Iot) {
    this.iotsRef?.update({
      cname:iot.cname,
      name:iot.name,
      type: iot.type,
      content: iot.content,
      rssi: iot.rssi,
      status:iot.status,
      checked: iot.checked,
  })
  }
}
