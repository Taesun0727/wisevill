import { Component, OnInit } from '@angular/core';
import { Notice } from 'modules/notice/models/notice'

let NOTICES: Notice[] = [
  {
    type: "기타",
    title: "알림",
    writer: "관리자",
    date: "2021-04-22",
    url: "http:asdasdasdsad",
    modify: "http:dsadsadasd",
    checked: false
  },
  {
    type: "알림",
    title: "긴급",
    writer: "관리자",
    date: "2021-05-20",
    url: "http:asdasdasdsad",
    modify: "http:dsadsadasd",
    checked: false
  },
]

@Component({
  selector: 'sb-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  notices = NOTICES

  constructor() { }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev:any) {
    this.notices.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.notices.every(p => p.checked);
  }

}
