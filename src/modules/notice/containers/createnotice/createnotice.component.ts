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
  today = new Date();
  choosenFiles: FileList | undefined;
  existingFile: File | any;
  filelabel = '파일을 선택해 주세요.'

  constructor(public router: Router,public ns: NoticeService, public fb: FormBuilder,) {
    this.noticeForm = this.fb.group({
      type: [''],
      title: [''],
      writer: [''],
      date: [this.today.toLocaleString()],
      content: [''],
      addfile: [''],
      modify: [''],
      checked: [''],
    })
   }

  ngOnInit(): void {
  }

  ResetForm() {
    this.noticeForm.reset();
  }

  golist() {
    this.router.navigateByUrl('/notice')
  }

  save() {
    this.ns.AddNotice(this.noticeForm.value);
    this.router.navigateByUrl('/notice')
  }

  modify() {
    console.log(this.noticeForm.value);
  }

  chooseFile(fileInput: any) {
    this.choosenFiles = fileInput.target.files
    this.existingFile = this.choosenFiles?.item(0);
    this.filelabel = this.existingFile.name
    this.noticeForm.addfile = this.existingFile.name
  }

}
