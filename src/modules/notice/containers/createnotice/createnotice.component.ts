import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'modules/notice/services/file-upload.service'

@Component({
  selector: 'sb-createnotice',
  templateUrl: './createnotice.component.html',
  styleUrls: ['./createnotice.component.scss']
})
export class CreatenoticeComponent implements OnInit {
  fileToUpload: File | any;

  constructor(public fileToUploadService: FileUploadService, public router: Router) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.fileToUploadService.postFile(this.fileToUpload)
    .subscribe(data => { 
    }, (error: any) => {
      console.log(error);
    })
  }

  golist() {
    this.router.navigateByUrl('/notice')
  }

  save() {
    this.router.navigateByUrl('/notice')
  }

}
