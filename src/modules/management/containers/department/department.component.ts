import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'modules/management/models/department'
import { DepartmentService } from 'modules/management/services/department.service'
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
let DEPARTMENTS : Department[] = [

]

@Component({
  selector: 'sb-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  closeResult = '';
  departments = DEPARTMENTS
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  public departmentForm: FormGroup | undefined 


  constructor(public router: Router,private modalService: NgbModal,public ns: DepartmentService,public departmentcrud: DepartmentService) {
    this.refreshCountries();
   }

   ngOnInit(): void {
    this.refreshCountries();
    this.retrieveDepartments();
    
    console.log(this.departmentcrud.getAll())
  }
 

  retrieveDepartments(): void {
    this.ns.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ... c.payload.doc.data()})
          )
        )
    ).subscribe(data => {
      this.departments = data;
      this.collectionSize = data.length
    })
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
  listDelSubmit(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.departments.splice(x, 1 );
    }   }

  refreshCountries() {
    this.departments = DEPARTMENTS
      .map((department, i) => ({id: i + 1, ...department}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}