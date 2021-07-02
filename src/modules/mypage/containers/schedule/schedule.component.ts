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
  

 
  
	Schedules: Array<any> = [
		{ name: '업무', dayoffs: [  '출장','외근', ] },
		{ name: '휴가', dayoffs: [  '월차','연차','오전반차','오후반차','외출','조퇴','병가','생리휴가','출산휴가'  ] }
	];
    
	dayoffs: Array<any> | undefined; 

	changeSchedule(schedule: any) { 
		
		this.dayoffs = this.Schedules.find((scd: any) => scd.name == schedule).dayoffs; //Angular 11
	}

}
