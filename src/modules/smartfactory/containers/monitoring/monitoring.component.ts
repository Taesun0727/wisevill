import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  constructor() { }
  company: any

  ngOnInit(): void {
    this.company = history.state.company;
    this.searchmonitor();
  }

  searchmonitor() {
    console.log(this.company);
  }

}
