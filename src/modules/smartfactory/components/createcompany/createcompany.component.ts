import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '@modules/management/services/company.service';

@Component({
  selector: 'sb-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.scss']
})
export class CreatecompanyComponent implements OnInit {

  public companysForm: FormGroup|any;

  constructor(public router: Router,public companycrud: CompanyService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.companyForm();
    console.log(this.companycrud.getAll())
  }
 
  companyForm() {
    this.companysForm = this.fb.group({
      name:[''],
      boss:[''],
      address:[''],
      rname:[''],
      contact:[''],
      businpariod:[''],
      checked: [''],
    })
  }

  get name() {
    return this.companysForm.get('name')
  }
  get boss() {
    return this.companysForm.get('boss')
  }
  get address() {
    return this.companysForm.get('address')
  }
  get rname() {
    return this.companysForm.get('rname')
  }
  get contact() {
    return this.companysForm.get('contact')
  }
  ResetForm() {
    this.companysForm.reset();
  }
 
  golist() {
    this.router.navigateByUrl('/smartfactory/company')
  }

  save() {
    this.companycrud.AddCompany(this.companysForm.value);
    this.router.navigateByUrl('/smartfactory/company')
  }

}
