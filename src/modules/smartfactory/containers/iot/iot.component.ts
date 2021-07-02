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

  constructor() { }

  ngOnInit(): void {

  }
  checkAllCheckBox(ev:any) {
    this.iots.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.iots.every(p => p.checked);
  }

}
