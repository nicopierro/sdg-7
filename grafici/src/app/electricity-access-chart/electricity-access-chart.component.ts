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
  tempArray = [];
  value: number = 1990;
  sliderOptions: Options = {
    floor: 1990,
    ceil: 2020,
    showTicks: true
  }
  
  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);

    this.chartOptions = {
      width: 1280,
      height: 720,
      legend: 'top',
      colorAxis: {
        minValue: 0,
        colors: [
          'white','red','orange','yellow','lightgreen','darkgreen']
      }
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new Charts('Access to electricity (% of population)', 'GeoChart', this.chartData, ['Entity', 'Electricity'], this.chartOptions));
  }

  prepareVectData = (data: ElectricityAccess[]) => {
    this.tempArray = [];
    for (var i in data) {
      this.tempArray.push([
        data[i]['_id'],
        data[i]['years'][0]['electricity'],
      ]);
    }
    console.log(this.tempArray)
    this.chartDataArray[0]['data'] = this.tempArray;
    console.log(this.chartDataArray)
  }

  getRouterParam = (params: ParamMap) =>
  {
    this.uri_param = parseInt(params.get('anno')); 
    
  }
  
  cambioAnno() {
    console.log(typeof(this.value.toString()))
    this.obsVett = this.http.get<ElectricityAccess[]>(`https://5000-nicopierro-sdg7-wnk4uriufik.ws-eu34.gitpod.io/ElectricityAccess/${this.value}`);
    this.obsVett.subscribe(this.prepareVectData);
  }

  ngOnInit(): void {
    this.obsVett = this.http.get<ElectricityAccess[]>(`https://5000-nicopierro-sdg7-wnk4uriufik.ws-eu34.gitpod.io/ElectricityAccess/${this.uri_param}`);
    this.obsVett.subscribe(this.prepareVectData);

  }
}
