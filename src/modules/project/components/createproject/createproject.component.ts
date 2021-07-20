import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '@modules/management/services/member.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sb-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {

  closeResult = '';
  public projectsForm: FormGroup|any;

  constructor(private modalService: NgbModal, public router: Router,public projectcrud: MemberService, public fb: FormBuilder) { }



  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 

 

  ngOnInit(): void {
    this.projectsForm();
    console.log(this.projectcrud.getAll())
  }

  projectForm() {
    this.projectsForm = this.fb.group({
      title:[''],
      stdate:[''],
      eddate:[''],
      department:[''],
      personnel:[''],
      rank:[''],
      management:[''],
      checked: [''],
    })
  }
  get title() {
    return this.projectsForm.get('title')
  }
  get stdate() {
    return this.projectsForm.get('stdate')
  }
  get eddate() {
    return this.projectsForm.get('eddate')
  }
  get department() {
    return this.projectsForm.get('department')
  }
  get personnel() {
    return this.projectsForm.get('personnel')
  }
  get rank() {
    return this.projectsForm.get('rank')
  }  
 
  ResetForm() {
    this.projectsForm.reset();
  }

  golist() {
    this.router.navigateByUrl('/project')
  }

  save() {
    this.router.navigateByUrl('/project')
  }

}
