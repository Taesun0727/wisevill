import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Department } from 'modules/management/models/department'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentsRef: AngularFirestoreCollection<any>;
 

  dbPath = '/department';

  constructor(private db: AngularFirestore) {
    this.departmentsRef = db.collection(this.dbPath);
   }
   getAll(): AngularFirestoreCollection<Department> {
    return <any>this.departmentsRef;
  }
  create(department: Department): any {
    return this.departmentsRef.add({ ...department });
  }

  AddDepartment(department: Department) {
    return this.departmentsRef?.add({...department});
  }

  update(id: string, data: any): Promise<void> {
    return this.departmentsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.departmentsRef.doc(id).delete();
  }

}
