import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'modules/smartfactory/models/company'

let COMPANIES: Company[] = [
  {
    name: "포제이",
    boss: "홍길동",
    address: "인천 장수동 남중로 79",
    rname: "홍길동",
    contact: "010-0000-0000",
    businpariod: "2020.01.01 ~ 2022.01.01",
    checked: false,
  },
  {
    name: "지프라임",
    boss: "박길동",
    address: "광주 서구 풍암로24",
    rname: "홍길동",
    contact: "010-0000-0000",
    businpariod: "2020.01.01 ~ 2022.01.01",
    checked: false,
  },
  {
    name: "지프라임",
    boss: "박길동",
    address: "광주 서구 풍암로24",
    rname: "홍길동",
    contact: "010-0000-0000",
    businpariod: "2020.01.01 ~ 2022.01.01",
    checked: false,
  },
  {
    name: "지프라임",
    boss: "박길동",
    address: "광주 서구 풍암로24",
    rname: "홍길동",
    contact: "010-0000-0000",
    businpariod: "2020.01.01 ~ 2022.01.01",
    checked: false,
  },
  {
    name: "지프라임",
    boss: "박길동",
    address: "광주 서구 풍암로24",
    rname: "홍길동",
    contact: "010-0000-0000",
    businpariod: "2020.01.01 ~ 2022.01.01",
    checked: false,
  },
  {
    name: "지프라임",
    boss: "박길동",
    address: "광주 서구 풍암로24",
    rname: "홍길동",
    contact: "010-0000-0000",
    businpariod: "2020.01.01 ~ 2022.01.01",
    checked: false,
  },
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

}
