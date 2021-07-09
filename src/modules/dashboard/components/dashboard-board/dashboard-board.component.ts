import { Component, OnInit } from '@angular/core';
import { Notice, Eventlog, Servervalidity } from 'modules/dashboard/models/dashcard.model'

let NOTICES: Notice[] = [
  {
    name: "관리자",
    title: "열심히하세요"
  },
  {
    name: "관리자",
    title: "열심히하세요"
  },
  {
    name: "관리자",
    title: "열심히하세요"
  },
  {
    name: "관리자",
    title: "열심히하세요"
  },
]

let EVENTLOGS: Eventlog[] = [
  {
    date: "2021.3.4",
    time: "12:31:10",
    company: "포제이",
    log: "수신감도이상",
  },
  {
    date: "2021.3.4",
    time: "12:31:10",
    company: "포제이",
    log: "수신감도이상",
  },
  {
    date: "2021.3.4",
    time: "12:31:10",
    company: "포제이",
    log: "수신감도이상",
  },
  {
    date: "2021.3.4",
    time: "12:31:10",
    company: "포제이",
    log: "수신감도이상",
  },
  {
    date: "2021.3.4",
    time: "12:31:10",
    company: "포제이",
    log: "수신감도이상",
  },
]

let SERVERV: Servervalidity[] = [
  {
    company: "포제이",
    title: "2021-04-22~2021-04-22",
  },
  {
    company: "포제이",
    title: "2021-04-22~2021-04-22",
  },
  {
    company: "포제이",
    title: "2021-04-22~2021-04-22",
  },
  {
    company: "포제이",
    title: "2021-04-22~2021-04-22",
  },
]

@Component({
  selector: 'sb-dashboard-board',
  templateUrl: './dashboard-board.component.html',
  styleUrls: ['./dashboard-board.component.scss']
})
export class DashboardBoardComponent implements OnInit {
  notices = NOTICES;
  eventlogs = EVENTLOGS;
  servervs = SERVERV;

  constructor() { }

  ngOnInit(): void {
  }

}
