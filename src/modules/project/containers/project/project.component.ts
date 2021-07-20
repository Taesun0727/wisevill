import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'modules/project/models/project'

let PROJECTS: Project[] = [

]


@Component({
  selector: 'sb-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  pgstatus = '';
  projects = PROJECTS

  model: NgbDateStruct | undefined;
  model1: NgbDateStruct | undefined;

  page = 1;
  pageSize = 4;
  collectionSize = PROJECTS.length;

  constructor(public router: Router) { 
    this.refreshCountries();
  }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev:any) {
    this.projects.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.projects.every(p => p.checked);
  }

  refreshCountries() {
    this.projects = PROJECTS
      .map((project, i) => ({id: i + 1, ...project}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createproject() {
    this.router.navigateByUrl('project/createproject')
  }

}
