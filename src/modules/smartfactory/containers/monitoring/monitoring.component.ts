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
  selector: 'sb-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
 
  companies = MCOMPANIES

  constructor(public router: Router) { 	}
  ngOnInit() {}
  detail(company: any) {
		this.router.navigateByUrl('/smartfactory/detail', {state: {company}})
	}

}
