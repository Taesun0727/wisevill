import { Component, OnInit, TemplateRef, ViewChild, } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sb-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @ViewChild('content') private content: TemplateRef<any> | undefined
  closeResult = '';
  constructor(private modalService: NgbModal,) { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    customButtons: {
      myCustomButton: {
        text: '일정등록',
        click: this.handleDateClick.bind(this)
      }
    },
    headerToolbar: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay myCustomButton'
    },
    dateClick : this.handleDateClick.bind(this)
    
  };
  handleDateClick(info : any) {
    this.modalService.open(this.content, {ariaDescribedBy: 'modal-basic-title', centered: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  



}
