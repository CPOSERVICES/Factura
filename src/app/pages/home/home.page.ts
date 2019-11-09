import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { Chart } from 'chart.js';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // @ViewChild("barCanvas", {static: false}) barCanvas: ElementRef;

  //  barChart: Chart;

  constructor( ) { }

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Productos más vendidos'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }

  ngOnInit() {
  
   }

}
