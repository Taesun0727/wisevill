import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '@modules/smartfactory/services/db.service';

@Component({
  selector: 'sb-createdb',
  templateUrl: './createdb.component.html',
  styleUrls: ['./createdb.component.scss']
})
export class CreatedbComponent implements OnInit {

  public dbsForm: FormGroup|any;

  constructor(public router: Router,public dbcrud: DbService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.dbForm();
    console.log(this.dbcrud.getAll())
  }
 
  dbForm() {
    this.dbsForm = this.fb.group({
      company:[''],
      type:[''],
      cnserver:[''],
      name:[''],
      host:[''],
      port:[''],
      kind:[''],
      shortkut:[''],
      manage:[''],
      checked: [''],
    })
  }

  get company() {
    return this.dbsForm.get('company')
  }
  get type() {
    return this.dbsForm.get('type')
  }
  get cnserver() {
    return this.dbsForm.get('cnserver')
  }
  get name() {
    return this.dbsForm.get('name')
  }
  get host() {
    return this.dbsForm.get('host')
  }
  get port() {
    return this.dbsForm.get('port')
  }
  get kind() {
    return this.dbsForm.get('kind')
  }
  ResetForm() {
    this.dbsForm.reset();
  }
 
  golist() {
    this.router.navigateByUrl('/smartfactory/db')
  }

  save() {
    this.dbcrud.AddDb(this.dbsForm.value);
    this.router.navigateByUrl('/smartfactory/db')
  }

}

