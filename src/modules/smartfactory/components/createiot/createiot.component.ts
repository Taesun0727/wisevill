import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-createiot',
  templateUrl: './createiot.component.html',
  styleUrls: ['./createiot.component.scss']
})
export class CreateiotComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  golist() {
    this.router.navigateByUrl('/smartfactory/iot')
  }
  
  save() {
    this.router.navigateByUrl('/smartfactory/iot')
  }
}
