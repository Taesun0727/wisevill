import { Component, OnInit } from '@angular/core';
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
	}
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
  constructor() { }

  ngOnInit(): void {
  }

}
