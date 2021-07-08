import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  page = 1;
  pageSize = 4;
  collectionSize = NOTICES.length;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.refreshCountries();
  }

  checkAllCheckBox(ev:any) {
    this.notices.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.notices.every(p => p.checked);
  }

  refreshCountries() {
    this.notices = NOTICES
      .map((notice, i) => ({id: i + 1, ...notice}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createnotice() {
    this.router.navigateByUrl('/notice/createnotice')
  }
}
