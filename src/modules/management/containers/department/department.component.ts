import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'modules/management/models/department'

let DEPARTMENTS : Department[] = [
  {
    company: "와이즈빌",
    department: "개발팀",
    abb: "개발",
    use: "사용",
    checked: false
  },
  {
    company: "와이즈빌",
    department: "설비팀",
    abb: "설비",
    use: "사용",
    checked: false
  },
]

@Component({
  selector: 'sb-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal) { }
  departments = DEPARTMENTS

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
    this.departments.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.departments.every(p => p.checked);
  }
}
