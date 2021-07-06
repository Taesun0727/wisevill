import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Work } from 'modules/management/models/work'
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

let WORKS : Work[] = [
  {
    date: "2021-04-22",
    name: "홍길동",
    department: "개발팀",
    time: "8시간",
    remark: "체크",
    checked: false
  },
  {
    date: "2021-04-23",
    name: "홍길동",
    department: "개발팀",
    time: "8시간",
    remark: "체크",
    checked: false
  },

]

@Component({
  selector: 'sb-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal, config: NgbTimepickerConfig) { 
    config.seconds = false;
    config.spinners = false;
  }
  works = WORKS;

  ngOnInit(): void {
  }

  open(content : any) {
    this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  private getDismissReason(reason : any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  checkAllCheckBox(ev:any) {
    this.works.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.works.every(p => p.checked);
  }
}
