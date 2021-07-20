import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { server } from '@modules/smartfactory/models/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  serversRef: AngularFirestoreCollection<any>|any ;
  serverRef: AngularFireObject<any> | undefined;

  dbPath = '/server';

  constructor(private db: AngularFirestore) {
    this.serversRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<server> {
    return <any>this.serversRef;
  }

  AddServer(server: server) {
    return this.serversRef?.add({...server});
  }


  UpdateServer(server: server) {
    this.serversRef?.update({
      name:server.name,
      type:server.type,
      domain: server.domain,
      ip: server.ip,
      webtype: server.webtype,
      checked: server.checked,
  })
  }
}
