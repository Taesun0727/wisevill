import { Component, OnInit } from '@angular/core';
import { Mcompany } from '../../models/mcompany';
import { Router } from '@angular/router';

let MCOMPANIES: Mcompany[] = [
  {
    name: "포제이",
    
   
  },
  {
    name: "지프라임",
 
   
  },
  {
    name: "해피독스",
 
   
  },
  {
    name: "본즈화학",

  },
  {
    name: "우드미",
 
   
  },
  {
    name: "포제이",
 
   
  },
  {
    name: "포제이",
 
   
  },
  {
    name: "포제이",
  
   
  },

]
@Component({
  selector: 'sb-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  companies = MCOMPANIES

  constructor(public router: Router) { 	}
  ngOnInit() {}
  detail(company: any) {
		this.router.navigateByUrl('/smartfactory/detail', {state: {company}})
	}


}
