import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'sb-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  model: NgbDateStruct | undefined;
  model1: NgbDateStruct | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
