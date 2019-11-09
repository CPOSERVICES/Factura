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
        text: 'Productos más vendidos por mes'
      },
      xAxis: {
        categories: ['Camisa en Índigo T-40', 'Pantalón en Índigo T-40', 'Zapato Bata T-40']
      },
      yAxis: {
        title: {
          text: 'Productos de Línea'
        }
      },
      series: [
        {
          name: 'Junio',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'Julio',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }

  ngOnInit() {
  
   }

}
