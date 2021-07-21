import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '@modules/smartfactory/services/server.service';

@Component({
  selector: 'sb-createserver',
  templateUrl: './createserver.component.html',
  styleUrls: ['./createserver.component.scss']
})
export class CreateserverComponent implements OnInit {

  public serversForm: FormGroup|any;

  constructor(public router: Router,public servercrud: ServerService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.serverForm();
    console.log(this.servercrud.getAll())
  }
 
  serverForm() {
    this.serversForm = this.fb.group({
      name:[''],
      type:[''],
      domain:[''],
      ip:[''],
      webtype:[''],
      checked: [''],
    })
  }


  get name() {
    return this.serversForm.get('name')
  }
  get type() {
    return this.serversForm.get('type')
  }
  get domain() {
    return this.serversForm.get('domain')
  }
  get ip() {
    return this.serversForm.get('ip')
  }
  get webtype() {
    return this.serversForm.get('webtype')
  }
  ResetForm() {
    this.serversForm.reset();
  }
 
  golist() {
    this.router.navigateByUrl('/smartfactory/server')
  }

  save() {
    this.servercrud.AddServer(this.serversForm.value);
    this.router.navigateByUrl('/smartfactory/server')
  }

}