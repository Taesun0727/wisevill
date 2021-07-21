import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { server } from '@modules/smartfactory/models/server';

let SERVER: server[] = [
 
]

@Component({
  selector: 'sb-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  servers = SERVER;
  page = 1;
  pageSize = 4;
  collectionSize = SERVER.length;

  constructor(public router: Router) {
    this.refreshCountries();
  }

  ngOnInit(): void {
  }
  checkAllCheckBox(ev:any) {
    this.servers.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.servers.every(p => p.checked);
  }
  listDelSubmit(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.servers.splice(x, 1 );
    }   
  }


  refreshCountries() {
    this.servers = SERVER
      .map((server, i) => ({id: i + 1, ...server}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createserver() {
    this.router.navigateByUrl('/smartfactory/server/createserver')
  }

}
