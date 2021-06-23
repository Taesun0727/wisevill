import { Component, OnInit } from '@angular/core';
import { Iot } from 'modules/smartfactory/models/iot'

const IOT: Iot[] = [
  {
    cname: '포제이',
    name: 'Forj',
    type: 'P',
    content: '충진기',
    rssi: '-59',
    status: true
  },
  {
    cname: '포제이',
    name: 'Forj',
    type: 'P',
    content: '충진기',
    rssi: '-59',
    status: true
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

}
