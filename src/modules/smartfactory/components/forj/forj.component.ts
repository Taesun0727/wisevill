import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'sb-forj',
  templateUrl: './forj.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./forj.component.scss']
})
export class ForjComponent implements OnInit, AfterViewInit{

  @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
      this.chart = new Chart(this.myBarChart.nativeElement, {
          type: 'bar',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                  {
                      label: 'Revenue',
                      backgroundColor: 'rgba(2,117,216,1)',
                      borderColor: 'rgba(2,117,216,1)',
                      data: [4215, 5312, 6251, 7841, 9821, 14984],
                  },
              ],
          },
          options: {
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'month',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 6,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 15000,
                              maxTicksLimit: 5,
                          },
                          gridLines: {
                              display: true,
                          },
                      },
                  ],
              },
              legend: {
                  display: false,
              },
          },
      });
  }
  

}
