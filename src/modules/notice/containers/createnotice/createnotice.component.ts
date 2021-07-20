import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticeService } from '../../services/notice.service';

@Component({
  selector: 'sb-createnotice',
  templateUrl: './createnotice.component.html',
  styleUrls: ['./createnotice.component.scss']
})
export class CreatenoticeComponent implements OnInit {
  public noticeForm: FormGroup | any

  constructor(public router: Router,public noticecrud: NoticeService, public fb: FormBuilder,) { }

  ngOnInit(): void {
    this.noticForm();
    console.log(this.noticecrud.getAll())
  }

  noticForm() {
    this.noticeForm = this.fb.group({
      type: [''],
      title: [''],
      writer: [''],
      date: [''],
      content: [''],
      addfile: [''],
      modify: [''],
      checked: [''],
    })
  }
  get type() {
    return this.noticeForm.get('type')
  }

  get writer() {
    return this.noticeForm.get('writer')
  }

  get title() {
    return this.noticeForm.get('title')
  }

  get content() {
    return this.noticeForm.get('content')
  }
  
  get addfile() {
    return this.noticeForm.get('addfile')
  }

  ResetForm() {
    this.noticeForm.reset();
  }

  golist() {
    this.router.navigateByUrl('/notice')
  }

  save() {
    this.noticecrud.AddNotice(this.noticeForm.value);
    this.router.navigateByUrl('/notice')
  }

}
