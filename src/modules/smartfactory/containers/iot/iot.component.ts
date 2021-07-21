import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iot } from 'modules/smartfactory/models/iot'

const IOT: Iot[] = [

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

  constructor(public router: Router) { 
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
  listDelSubmit(x: any){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.iots.splice(x, 1 );
    }   
  }

  refreshCountries() {
    this.iots = IOT
      .map((iot, i) => ({id: i + 1, ...iot}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  createiot() {
    this.router.navigateByUrl('/smartfactory/iot/createiot')
  }

}
