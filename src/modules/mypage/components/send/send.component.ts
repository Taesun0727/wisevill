import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Memo } from 'modules/mypage/models/memo';
import { Router } from '@angular/router';

let MEMOS: Memo[] = [
 
] 
@Component({
  selector: 'sb-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
 
  memos = MEMOS;
  page = 1;
  pageSize = 4;
  collectionSize = MEMOS.length;

  closeResult = '';
  constructor(private modalService: NgbModal,public router: Router) { this.refreshCountries();}

  ngOnInit(): void {
  }
  refreshCountries() {
    this.memos = MEMOS
      .map((memo, i) => ({id: i + 1, ...memo}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  checkAllCheckBox(ev:any) {
    this.memos.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.memos.every(p => p.checked);
  }
  listDelSubmit(x: any){
    var delBtn = confirm(" 삭제하시겠습니까?");
    if ( delBtn == true ) {
      this.memos.splice(x, 1 );
    }   
  }
  
  open(content : any) {
    console.log(content)
    this.modalService.open(content, {ariaDescribedBy: 'modal-basic-title', centered: true,  size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }
  detail(memo: any) {
		this.router.navigateByUrl('./memo/send', {state: {memo}})
	}
  send() {
    this.router.navigateByUrl('/mypage/memo/send')
  }
  receive(){
    this.router.navigateByUrl('/mypage/memo')
  }


  private getDismissReason(reason : any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  Checks: Array<any> = [
		{ name: '확인메시지', details: [  '내용','보낸사람', ] },
		{ name: '미확인메시지', details: [  '내용','보낸사람',  ] }
	];
    
	details: Array<any> | undefined; 

	changeCheck(check: any) { 
		
		this.details = this.Checks.find((chk: any) => chk.name == check).details; //Angular 11
	}
}
