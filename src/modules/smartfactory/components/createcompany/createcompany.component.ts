import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sb-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.scss']
})
export class CreatecompanyComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  golist() {
    this.router.navigateByUrl('/smartfactory/company')
  }

  save() {
    this.router.navigateByUrl('/smartfactory/company')
  }

}
