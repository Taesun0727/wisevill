import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Db } from '@modules/smartfactory/models/db';

let DBS: Db[] = [
  {
    company: "와이즈빌",
    type: "테스트용",
    cnserver: "forj.wisevill.co.kr",
    name: "testdb1",
    host: "192.168.0.1",
    port: "3306",
    kind: "oracle",
    shortkut: "http//",
    manage: "http://",
    checked: false
  }
]

@Component({
  selector: 'sb-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DbComponent implements OnInit {
  dbs= DBS;
  page = 1;
  pageSize = 4;
  collectionSize = DBS.length;

  constructor(public router: Router) { 
    this.refreshCountries();
  }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev:any) {
    this.dbs.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.dbs.every(p => p.checked);
  }

  refreshCountries() {
    this.dbs = DBS
      .map((db, i) => ({id: i + 1, ...db}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createdb() {
    this.router.navigateByUrl('/smartfactory/db/createdb')
  }

}
