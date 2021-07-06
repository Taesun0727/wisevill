import { Component, OnInit } from '@angular/core';
import { server } from '@modules/smartfactory/models/server';

let SERVER: server[] = [
  {
    name: "포제이",
    type: "테스트용",
    domain: "http://",
    ip: "192.000.000.000",
    webtype: "NGINX"
  },
  
  {
    name: "지프라임",
    type: "테스트용",
    domain: "http://",
    ip: "192.000.000.000",
    webtype: "NGINX"
  }
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

  constructor() {
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

  refreshCountries() {
    this.servers = SERVER
      .map((server, i) => ({id: i + 1, ...server}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
