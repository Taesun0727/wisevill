import { Component, OnInit } from '@angular/core';
import { Iot } from 'modules/smartfactory/models/iot'

const IOT: Iot[] = [
  {
    cname: '포제이',
    name: 'Forj',
    type: 'P',
    content: '충진기',
    rssi: '-59',
    status: true,
    checked: false,
  },
  {
    cname: '포제이',
    name: 'Forj',
    type: 'P',
    content: '충진기',
    rssi: '-59',
    status: true,
    checked: false,
  },
]

@Component({
  selector: 'sb-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {

  iots = IOT;
  page = 1;
  pageSize = 4;
  collectionSize = IOT.length;

  constructor() { 
    this.refreshCountries();
  }

  ngOnInit(): void {

  }
  checkAllCheckBox(ev:any) {
    this.iots.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.iots.every(p => p.checked);
  }

  refreshCountries() {
    this.iots = IOT
      .map((iot, i) => ({id: i + 1, ...iot}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
