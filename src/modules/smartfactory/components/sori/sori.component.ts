import { Component, OnInit } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  
  ElementRef,

  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'sb-sori',
  templateUrl: './sori.component.html',
  styleUrls: ['./sori.component.scss']
})
export class SoriComponent implements OnInit, AfterViewInit {
  @ViewChild('myPieChart') myPieChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
      this.chart = new Chart(this.myPieChart.nativeElement, {
          type: 'pie',
          data: {
              labels: ['Blue', 'Red', 'Yellow', 'Green'],
              datasets: [
                  {
                      data: [12.21, 15.58, 11.25, 8.32],
                      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                  },
              ],
          },
      });
  }

}
