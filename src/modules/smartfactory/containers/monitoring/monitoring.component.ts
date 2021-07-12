import { Component, OnInit } from '@angular/core';
import { Mcompany } from '../../models/mcompany';
import { Router } from '@angular/router';

let MCOMPANIES: Mcompany[] = [
      {
      name: "포제이",
      gowhere : "http://forj-mes.com/pages/wv_factory/login/",
      
     
    },
    {
      name: "지프라임",
      gowhere :"",
   
     
    },
    {
      name: "해피독스",
      gowhere :"",
   
   
     
    },
    {
      name: "본즈화학",
      gowhere :"",
   
  
    },
    {
      name: "우드미",
      gowhere :"",
   
   
     
    },
    {
      name: "포제이",
      gowhere :"",
   
   
     
    },
    {
      name: "포제이",
      gowhere :"",
   
   
     
    },
    {
      name: "포제이",
      gowhere :"",
   
    
     
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
