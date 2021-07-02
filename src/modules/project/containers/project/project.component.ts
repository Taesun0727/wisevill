import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Pjtable } from 'modules/project/models/project'

let PROJECTS: Pjtable[] = [
  {
    title: "알림",
    stdate: "2021-04-22",
    eddate: "2021-04-22",
    department: "개발팀",
    personnel: "관리자외 5명",
    rank: "시작",
    management: "http:sdadasd",
    checked: false
  },
  {
    title: "알림",
    stdate: "2021-04-22",
    eddate: "2021-04-22",
    department: "개발팀",
    personnel: "관리자외 5명",
    rank: "시작",
    management: "http:sdadasd",
    checked: false
  }
]


@Component({
  selector: 'sb-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects = PROJECTS

  model: NgbDateStruct | undefined;
  model1: NgbDateStruct | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev:any) {
    this.projects.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.projects.every(p => p.checked);
  }

}
