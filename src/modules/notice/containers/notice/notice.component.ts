import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notice } from 'modules/notice/models/notice'
import { NoticeService } from 'modules/notice/services/notice.service'
import { map } from 'rxjs/operators';


@Component({
  selector: 'sb-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  notices: Notice[] = []
  page = 1;
  pageSize = 4;
  collectionSize = 0;

  constructor(public router: Router, public ns: NoticeService) {
   }

  ngOnInit(): void {
    this.getNotice();
    this.refreshCountries();
  }

  getNotice() {
    this.ns.getAll().subscribe(res => {
      this.collectionSize = res.length
      this.notices = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Notice
        }
      })
    })
  }

  checkAllCheckBox(ev:any) {
    this.notices.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.notices.every(p => p.checked);
  }

  refreshCountries() {
    this.notices = this.notices.map((notice, i) => ({id: i + 1, ...notice}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createnotice() {
    this.router.navigateByUrl('/notice/createnotice')
  }

  goupdate(id:any) {
    this.router.navigateByUrl('/notice/updatenotice', {state: {id}})
  }

  /*
  delete() {
    this.notices.forEach(x => {
      if (x.checked == true) {
        this.ns.delete(x.id)
      }
    })
  }
  */

  downloadfile() {

  }
}
