import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Work } from 'modules/management/models/work'
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

let WORKS : Work[] = [

]

@Component({
  selector: 'sb-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  closeResult = '';
  page = 1;
  pageSize = 4;
  collectionSize = WORKS.length;
  works = WORKS;
 
  constructor(private modalService: NgbModal, config: NgbTimepickerConfig) { 
    config.seconds = false;
    config.spinners = false;
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
  listDelSubmit(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.works.splice(x, 1 );
    }   
  }

  refreshCountries() {
    this.works = WORKS
      .map((work, i) => ({id: i + 1, ...work}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
