import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sb-range-date-picker',
  templateUrl: './range-date-picker.component.html',
  styleUrls: ['./range-date-picker.component.scss']
})
export class RangeDatePickerComponent implements OnInit {

  @Input() Gfromdate: NgbDate | any;
  @Input() Gtodate: NgbDate | any;
  @Output() newItemEvent = new EventEmitter<NgbDate | any>();
  @Output() ItemEvent = new EventEmitter<NgbDate | any>();

  ngOnInit(): void {
    if(this.Gfromdate != null && this.Gtodate != null){
      this.fromDate = this.Gfromdate;
      this.toDate = this.Gtodate;
    } else {
      this.fromDate = this.calendar.getToday();
      this.toDate = this.calendar.getToday();
    }
  }

  ngDoCheck() {
    setTimeout(() => {
      this.newItemEvent.emit(this.fromDate)
      this.ItemEvent.emit(this.toDate)
    })
  }

  hoveredDate: NgbDate | null = null;

  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
