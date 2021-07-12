import { Component, OnInit } from '@angular/core';
import { Dcompany } from '@modules/smartfactory/models/dcompany';

let DCOMPANIES: Dcompany[] = [
  {
  name: "포제이",
  gowhere : "http://forj-mes.com/pages/wv_factory/login/",
  
 
},

]

@Component({
  selector: 'sb-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  companies = DCOMPANIES

  constructor() { }

  ngOnInit(): void {
  }

}
