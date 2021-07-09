import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-createdb',
  templateUrl: './createdb.component.html',
  styleUrls: ['./createdb.component.scss']
})
export class CreatedbComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  golist() {
    this.router.navigateByUrl('/smartfactory/db')
  }

  save() {
    this.router.navigateByUrl('/smartfactory/db')
  }

}
