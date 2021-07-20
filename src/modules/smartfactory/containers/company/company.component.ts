import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'modules/smartfactory/models/company'

let COMPANIES: Company[] = [
  

]

@Component({
  selector: 'sb-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies = COMPANIES;
  page = 1;
  pageSize = 4;
  collectionSize = COMPANIES.length;

  
  constructor(public router: Router) {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev:any) {
    this.companies.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.companies.every(p => p.checked);
  }

  refreshCountries() {
    this.companies = COMPANIES
      .map((company, i) => ({id: i + 1, ...company}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createfactory() {
    this.router.navigateByUrl('/smartfactory/company/createcompany')
  }

  goserver(company: any) {
    this.router.navigateByUrl('/smartfactory/server', {state: company})
  }

  godb(company: any) {
    this.router.navigateByUrl('/smartfactory/db', {state: company})
  }

}
