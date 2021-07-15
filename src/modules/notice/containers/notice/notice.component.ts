import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notice } from 'modules/notice/models/notice'
import { NoticeService } from 'modules/notice/services/notice.service'
import { map } from 'rxjs/operators';
let NOTICES: Notice[] = [
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
  collectionSize = 0;

  constructor(public router: Router, public ns: NoticeService) { }

  ngOnInit(): void {
    this.refreshCountries();
    this.retrieveNotices();
  }

  retrieveNotices(): void {
    this.ns.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ... c.payload.doc.data()})
          )
        )
    ).subscribe(data => {
      this.notices = data;
      this.collectionSize = data.length
    })
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
