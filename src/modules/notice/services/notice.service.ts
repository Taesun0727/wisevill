import { Injectable } from '@angular/core';
import { Notice } from 'modules/notice/models/notice'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  noticesRef: AngularFirestoreCollection<any> | undefined;

  dbPath = '/notice';

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.noticesRef = db.collection(this.dbPath);
   }

  getAll() {
    return this.db.collection(this.dbPath).snapshotChanges();
  }

  getnotice(id: any) {
    return this.db.collection(this.dbPath).doc(id).valueChanges()
  }

  AddNotice(notice: Notice) {
    var storageRef = firebase.storage().ref();
    var filestorageRef = storageRef.child(`${this.dbPath}/${notice.addfile}`)

    filestorageRef.putString("").then(function(snapshot:any){})

    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.dbPath).add(notice).then(res => {console.log(res)}, error => reject)
    })
  
  }

  delete(id: string): Promise<void> {
    return this.db.collection(this.dbPath).doc(id).delete();
  }

  UpdateNotice(notice: Notice, id: any) {
    return this.db.collection(this.dbPath).doc(id).update({
      title: notice.title,
      writer: notice.writer,
      content: notice.content,
      addfile: notice.addfile,
    })

  }


}
