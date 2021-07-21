import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Db } from '@modules/smartfactory/models/db';

let DBS: Db[] = [
 
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
  listDelSubmit(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.dbs.splice(x, 1 );
    }   
  }

  refreshCountries() {
    this.dbs = DBS
      .map((db, i) => ({id: i + 1, ...db}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createdb() {
    this.router.navigateByUrl('/smartfactory/db/createdb')
  }
  goserver(db: any) {
    this.router.navigateByUrl('/smartfactory/server', {state: db})
  }


}
