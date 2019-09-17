import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { BitcoinService } from '../services/bitcoin';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild('lineCanvas', {static: false}) lineCanvas: ElementRef;

  private lineChart: Chart;
  public btcdata: any;
  public btchistdata = [];

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.bitcoinService.getPrice().subscribe(data => {
      console.log(data);
      this.btcdata = data.bpi.USD.rate;
    });

    this.bitcoinService.getPriceHistory().subscribe(data => {
      console.log(data);
      this.btchistdata = data.data;
    });

    setTimeout(() => {

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [
          {
            label: 'btc price',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10496.82, 10328.95, 10254.56, 10095.42, 10248.45, 10331.72, 10363.77],
            spanGaps: false
          }
        ]
      }
    });
    }, 100);
  }
  }
