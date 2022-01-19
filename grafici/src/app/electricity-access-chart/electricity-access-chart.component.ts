import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectricityAccessComponent } from '../electricity-access/electricity-access.component';
import {ElectricityAccess} from '/workspace/sdg-7/grafici/src/app/models/electricity-access.model';

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
  chartData: ElectricityAccess[];

  constructor(public http: HttpClient){ 
    

  }
  
  prepareVectData = (data: ElectricityAccess[]) => {
    console.log(data);
    this.chartData = data;
    this.chartData.push(data);
  }

  ngOnInit(): void {
    this.obsVett = this.http.get<ElectricityAccess[]>(`https://5000-nicopierro-sdg7-gh3wx1dpygt.ws-eu27.gitpod.io/linee`);
    this.obsVett.subscribe(this.prepareVectData);
    
  }
  
  this.charts.push({
    title: 'Area Chart',
    type: ChartType.AreaChart,
    columns: ['Year', 'Sales', 'Expenses'],
    data: [
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540]
    ]
  });

}
