import { Component, OnInit } from '@angular/core';
import { Memo } from 'modules/navigation/models/memo'

let MEMOS: Memo[] = [
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
  selector: 'sb-top-nav-memo',
  templateUrl: './top-nav-memo.component.html',
  styleUrls: ['./top-nav-memo.component.scss']
})
export class TopNavMemoComponent implements OnInit {
  memotext = ''
  memos = MEMOS

  constructor() { }

  ngOnInit(): void {
    if(MEMOS.length == 0) {
      this.memotext = "새로운 쪽지가 없습니다"
    } else {
      this.memotext = "읽지않은 쪽지가 있습니다."
    }
  }

}
