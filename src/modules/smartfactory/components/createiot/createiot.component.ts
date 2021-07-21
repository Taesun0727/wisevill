import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IotService } from '@modules/smartfactory/services/iot.service';

@Component({
  selector: 'sb-createiot',
  templateUrl: './createiot.component.html',
  styleUrls: ['./createiot.component.scss']
})
export class CreateiotComponent implements OnInit {

  public iotsForm: FormGroup|any;

  constructor(public router: Router,public iotcrud: IotService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.iotForm();
    console.log(this.iotcrud.getAll())
  }
 
  iotForm() {
    this.iotsForm = this.fb.group({
      cname:[''],
      name:[''],
      type:[''],
      content:[''],
      rssi:[''],
      status:[''],
      checked: [''],
    })
  }
 

  get cname() {
    return this.iotsForm.get('company')
  }
  get name() {
    return this.iotsForm.get('type')
  }
  get type() {
    return this.iotsForm.get('cnserver')
  }
  get rssi() {
    return this.iotsForm.get('name')
  }
  get status() {
    return this.iotsForm.get('host')
  }
  
  ResetForm() {
    this.iotsForm.reset();
  }
 
  golist() {
    this.router.navigateByUrl('/smartfactory/iot')
  }

  save() {
    this.iotcrud.AddIot(this.iotsForm.value);
    this.router.navigateByUrl('/smartfactory/iot')
  }

}