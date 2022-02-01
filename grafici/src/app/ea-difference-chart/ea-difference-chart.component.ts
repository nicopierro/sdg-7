import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Charts } from '../models/chart-data.model';

import {
  ChartErrorEvent,
  ChartMouseLeaveEvent,
  ChartMouseOverEvent,
  ChartSelectionChangedEvent,
  ChartType,
  Column,
  GoogleChartComponent
} from 'angular-google-charts';
import { AccessToElectricity2010vs2019 } from '../models/ea-difference.model';


@Component({
  selector: 'app-ea-difference-chart',
  templateUrl: './ea-difference-chart.component.html',
  styleUrls: ['./ea-difference-chart.component.css']
})
export class EaDifferenceChartComponent implements OnInit {

  obsVett: Observable<AccessToElectricity2010vs2019[]>;
  chartData = [];
  chartDataArray: Charts[];
  chartOptions: {};
  constructor(public http: HttpClient) {
    this.chartOptions = {
      width: 1280,
      height: 720,
      hAxis: {
        title: '% of population',
      },
      vAxis: {
        title: 'Regions'
      },
      legend: {
        position: 'right', textStyle: {fontSize: 16}
      }
    }
  }

  prepareVectData = (data: AccessToElectricity2010vs2019[]) => {
    console.log(data);

    for (var i in data) {
      this.chartData.push([
        data[i]['Region'],
        data[i]['2010'],
        data[i]['2019']
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new Charts('Access to Electricity: 2010 vs 2019', 'BarChart', this.chartData, ['Region', '2010', '2019'], this.chartOptions));
    console.log(this.chartDataArray)
  }

  ngOnInit(): void {
    this.obsVett = this.http.get<AccessToElectricity2010vs2019[]>(`https://5000-nicopierro-sdg7-l4k3z0p0a9p.ws-eu29.gitpod.io/AccessToElectricity2010vs2019`);
    this.obsVett.subscribe(this.prepareVectData);

  }

}
