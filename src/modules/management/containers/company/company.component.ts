import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'modules/management/models/company'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

let COMPANIES : Company[] = [
]

@Component({
  selector: 'sb-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  closeResult = '';
  companies = COMPANIES;
  page = 1;
  pageSize = 4;
  collectionSize = COMPANIES.length;
  modifycompany = ''

  constructor(private modalService: NgbModal) {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }

  open(content : any) {
    this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  tableopen(modify : any, data : any) {
    this.modalService.open(modify, {ariaDescribedBy: 'modal-basic-title', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
    console.log(data)
    this.modifycompany = data.company
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
  listDelSubmit(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.companies.splice(x, 1 );
    }   
  }

  refreshCountries() {
    this.companies = COMPANIES
      .map((company, i) => ({id: i + 1, ...company}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
