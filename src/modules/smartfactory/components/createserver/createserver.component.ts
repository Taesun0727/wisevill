import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-createserver',
  templateUrl: './createserver.component.html',
  styleUrls: ['./createserver.component.scss']
})
export class CreateserverComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  golist() {
    this.router.navigateByUrl('/smartfactory/server')
  }

  save() {
    this.router.navigateByUrl('/smartfactory/server')
  }

}
