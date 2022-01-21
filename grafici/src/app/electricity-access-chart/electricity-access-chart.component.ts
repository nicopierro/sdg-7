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

  }


  ngOnInit(): void {
    this.obsVett = this.http.get<ElectricityAccess[]>(`https://5000-nicopierro-sdg7-gh3wx1dpygt.ws-eu27.gitpod.io/linee`);
    this.obsVett.subscribe(this.prepareVectData);
    
  }


}
