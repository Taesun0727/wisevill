import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '@modules/notice/services/notice.service';

@Component({
  selector: 'sb-updatenotice',
  templateUrl: './updatenotice.component.html',
  styleUrls: ['./updatenotice.component.scss']
})
export class UpdatenoticeComponent implements OnInit {
  public noticeForm: FormGroup | any
  noticeRef: any
  today = new Date();
  
  constructor(public ns: NoticeService, public formBuilder: FormBuilder, private router: Router, private act: ActivatedRoute) {
    this.noticeForm = this.formBuilder.group({
      type: [''],
      title: [''],
      writer: [''],
      date: [],
      content: [''],
      addfile: [''],
      modify: [''],
      checked: [''],
    })
   }

  ngOnInit(): void {
    const id = history.state.id;

    this.ns.getnotice(id).subscribe(res => {
      this.noticeRef = res;
      this.noticeForm = this.formBuilder.group({
        title: [this.noticeRef?.title],
        writer: [this.noticeRef?.writer],
        content: [this.noticeRef?.content],
        date: [this.noticeRef?.date],
        addfile: [this.noticeRef?.addfile]
      })
    })
  }


  save() {
    const id = history.state.id;
    this.ns.UpdateNotice(this.noticeForm.value, id);
    this.router.navigateByUrl('/notice')
  }

}
