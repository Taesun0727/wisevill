import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company, device } from '@modules/dashboard/models/dashcard.model';

let COMPANIES: company[] = [
	{
		name : "포제이",
		mserver_status : true,
		mserver_link : "",
		tserver_status : true,
		tserver_link : "",
		on_device : "",
		off_device : "",
		monitor_link : ""
	},
	{
		name : "지프라임",
		mserver_status : true,
		mserver_link : "",
		tserver_status : true,
		tserver_link : "",
		on_device : "",
		off_device : "",
		monitor_link : ""
	},
	{
		name : "MES",
		mserver_status : true,
		mserver_link : "",
		tserver_status : true,
		tserver_link : "",
		on_device : "",
		off_device : "",
		monitor_link : ""
	},
	{
		name : "헤이헤이",
		mserver_status : true,
		mserver_link : "",
		tserver_status : true,
		tserver_link : "",
		on_device : "",
		off_device : "",
		monitor_link : ""
	},
	{
		name : "헤이헤이",
		mserver_status : true,
		mserver_link : "",
		tserver_status : true,
		tserver_link : "",
		on_device : "",
		off_device : "",
		monitor_link : ""
	},
]

let DEVICES: device[] = [
	{
		name : "1호기",
		img : "http://",
		ex : "온도 : 40", //기기에서 뱉는 데이터값 이름 대충 지음 나중에 수정
		status : true,
	},
	{
		name : "1호기",
		img : "http://",
		ex : "온도 : 40", //기기에서 뱉는 데이터값 이름 대충 지음 나중에 수정
		status : true,
	}
]

@Component({
  selector: 'sb-smartfactory-card',
  templateUrl: './smartfactory-card.component.html',
  styleUrls: ['./smartfactory-card.component.scss']
})
export class SmartfactoryCardComponent implements OnInit {

  devices = DEVICES;
	companies = COMPANIES;
	
	// pagination 부분 변수
	page = 1;
  pageSize = 4;
  collectionSize = COMPANIES.length;

	constructor(public router: Router) { 
		this.refreshCountries();
	}

	//페이지네이션 작동 함수
	refreshCountries() {
    this.companies = COMPANIES
      .map((company, i) => ({id: i + 1, ...company}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

	gomonitor(company: any) {
		this.router.navigateByUrl('/smartfactory/monitoring', {state: {company}})
	}

}
