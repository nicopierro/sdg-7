import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Charts } from '../models/chart-data.model';

import { ElectricitySource } from '../models/electricity-source.model';

@Component({
  selector: 'app-electricity-source-chart',
  templateUrl: './electricity-source-chart.component.html',
  styleUrls: ['./electricity-source-chart.component.css']
})
export class ElectricitySourceChartComponent implements OnInit {

  obsVett: Observable<ElectricitySource[]>;
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

  prepareVectData = (data: ElectricitySource[]) => {
    console.log(data);

    for (var i in data) {
      this.chartData.push([
        data[i]['Year'],
        data[i]['Coal'],
        data[i]['Gas'],
        data[i]['Hydro'],
        data[i]['Solar'],
        data[i]['Wind'],
        data[i]['Oil'],
        data[i]['Nuclear'],
        data[i]['Other_renewables']
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new Charts('Share of electricity production by source, World', 'LineChart', this.chartData, ['Year', 'Coal', 'Gas', 'Hydro', 'Solar', 'Wind', 'Oil', 'Nuclear', 'Other_renewables'], this.chartOptions));
    console.log(this.chartDataArray)
  }

  ngOnInit(): void {
    this.obsVett = this.http.get<ElectricitySource[]>(`https://5000-nicopierro-sdg7-ttcdf662zxs.ws-eu31.gitpod.io/SharedElectricitySource`);
    this.obsVett.subscribe(this.prepareVectData);

  }

}




