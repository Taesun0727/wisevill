import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Department } from 'modules/management/models/department'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentsRef: AngularFirestoreCollection<any>|any ;
  departmentRef: AngularFireObject<any> | undefined;

  dbPath = '/department';

  constructor(private db: AngularFirestore) {
    this.departmentsRef = db.collection(this.dbPath);
   }

  getAll(): AngularFirestoreCollection<Department> {
    return <any>this.departmentsRef;
  }

  AddDepartment(department: Department) {
    return this.departmentsRef?.add({...department});
  }


  UpdateDepartment(department: Department) {
    this.departmentsRef?.update({
      company:department.company,
      department:department.department,
      abb: department.abb,
      use:department.use,
      checked: department.checked,
})}}
  