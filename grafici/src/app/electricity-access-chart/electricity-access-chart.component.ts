import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectricityAccessComponent } from '../electricity-access/electricity-access.component';
import { ElectricityAccess } from '/workspace/sdg-7/grafici/src/app/models/electricity-access.model';
import { Charts } from '../models/chart-data.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
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
  uri_param = 2019;

  value: number = 2019;
  sliderOptions: Options = {
    floor: 1970,
    ceil: 2020,
    step: 10,
    showTicks: true
  }
  
  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);

    this.chartOptions = {
      width: 1280,
      height: 720,
      colorAxis: {
        minValue: 0,
        colors: [
          'white','red','orange','yellow','lightgreen','darkgreen']
      }
    }
  }

  prepareVectData = (data: ElectricityAccess[]) => {

    for (var i in data) {
      this.chartData.push([
        data[i]['_id'],
        data[i]['years'][0]['electricity'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new Charts('Access to electricity (% of population)', 'GeoChart', this.chartData, ['Entity', 'Electricity'], this.chartOptions));
    console.log(this.chartDataArray)
  }

  prepareElectricityAccessData = (data: ElectricityAccess[]) => {
    console.log(data);


  };


  getRouterParam = (params: ParamMap) =>
  {
    this.uri_param = parseInt(params.get('anno')); 
    
  }
  

  ngOnInit(): void {
    this.obsVett = this.http.get<ElectricityAccess[]>(`https://5000-nicopierro-sdg7-vi2idnwsm42.ws-eu31.gitpod.io/ElectricityAccess/${this.uri_param}`);
    this.obsVett.subscribe(this.prepareVectData);

  }
}
