import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectricityAccessComponent } from '../electricity-access/electricity-access.component';
import { ElectricityAccess } from '/workspace/sdg-7/grafici/src/app/models/electricity-access.model';
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


@Component({
  selector: 'app-electricity-access-chart',
  templateUrl: './electricity-access-chart.component.html',
  styleUrls: ['./electricity-access-chart.component.css']
})
export class ElectricityAccessChartComponent implements OnInit {
  obsVett: Observable<ElectricityAccess[]>;
  chartData = [];
  chartDataArray: Charts[];
  chartOptions: {};
  constructor(public http: HttpClient) {
    this.chartOptions = {
      width: 720,
      height: 480,
      colorAxis: {
        colors: [
          'white','red','orange','yellow','lightgreen','darkgreen']
      }
    }
  }

  prepareVectData = (data: ElectricityAccess[]) => {
    console.log(data);

    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Access to electricity (% of population)'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new Charts('Access to electricity (% of population)', 'GeoChart', this.chartData, ['Entity', 'Access to electricity (% of population)'], this.chartOptions));
    console.log(this.chartDataArray)
  }

  prepareElectricityAccessData = (data: ElectricityAccess[]) => {
    console.log(data);


  };

  ngOnInit(): void {
    this.obsVett = this.http.get<ElectricityAccess[]>(`https://4200-nicopierro-sdg7-l4k3z0p0a9p.ws-eu29.gitpod.io/ElectricityAccess`);
    this.obsVett.subscribe(this.prepareVectData);

  }
}
