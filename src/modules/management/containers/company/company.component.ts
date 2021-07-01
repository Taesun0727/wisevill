import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'modules/management/models/company'

let COMPANIES : Company[] = [
  {
    company: "와이즈빌",
    ceo: "홍길동",
    number: "000-0000-0000",
    checked: false
  },
  {
    company: "와이즈빌",
    ceo: "홍길동",
    number: "000-0000-0000",
    checked: false
  },
  {
    company: "와이즈빌",
    ceo: "홍길동",
    number: "000-0000-0000",
    checked: false
  }
]

@Component({
  selector: 'sb-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal) { }
  companies = COMPANIES;

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
    this.companies.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.companies.every(p => p.checked);
  }

}
