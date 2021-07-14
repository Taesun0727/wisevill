import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notice } from 'modules/navigation/models/notice'

let NOTICES: Notice[] = [
  {
    name: "관리자",
    content: "안녕하세요",
    time: "25"
  },
  {
    name: "관리자",
    content: "안녕하세요",
    time: "25"
  },
  {
    name: "관리자",
    content: "안녕하세요",
    time: "25"
  },
  {
    name: "관리자",
    content: "안녕하세요",
    time: "25"
  },
]

@Component({
  selector: 'sb-top-nav-notice',
  templateUrl: './top-nav-notice.component.html',
  styleUrls: ['./top-nav-notice.component.scss']
})
export class TopNavNoticeComponent implements OnInit {

  noticetext = ''
  notices = NOTICES

  constructor(public router: Router) { }

  ngOnInit(): void {
    if(NOTICES.length == 0) {
      this.noticetext = "새로운 공지가 없습니다"
    } else {
      this.noticetext = "읽지않은 공지가 있습니다."
    }
  }
  gonotice() {
    this.router.navigateByUrl('../notice')
  }


}
