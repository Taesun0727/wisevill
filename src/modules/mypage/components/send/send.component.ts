import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Memo } from 'modules/mypage/models/memo';

let MEMOS: Memo[] = [
  {
    content: "알립니다.",
    send: "와이즈빌",
    date: "2020.01.01",
    managemant: "비고",
    checked: false,
  },
  {
    content: "알립니다.",
    send: "와이즈빌",
    date: "2020.01.01",
    managemant: "비고",
    checked: false,
  },
  {
    content: "알립니다.",
    send: "와이즈빌",
    date: "2020.01.01",
    managemant: "비고",
    checked: false,
  },
  {
    content: "알립니다.",
    send: "와이즈빌",
    date: "2020.01.01",
    managemant: "비고",
    checked: false,
  },
  {
    content: "알립니다.",
    send: "와이즈빌",
    date: "2020.01.01",
    managemant: "비고",
    checked: false,
  },
  {
    content: "알립니다.",
    send: "와이즈빌",
    date: "2020.01.01",
    managemant: "비고",
    checked: false,
  },
] 
@Component({
  selector: 'sb-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  memos = MEMOS;
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  checkAllCheckBox(ev:any) {
    this.memos.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.memos.every(p => p.checked);
  }
  open(content : any) {
    console.log(content)
    this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title', centered: true,  size: 'lg' }).result.then((result) => {
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

}
