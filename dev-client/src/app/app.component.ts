import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectricityAccess } from './models/electricity_access.model';
import { ChartData } from './models/chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obsElectricityAccess: Observable<ElectricityAccess[]>;
  chartDataArray = new Array<ChartData>();
  chartTitle: string;
  chartType: string;
  chartData = [];
  chartColumns = [];
  chartOptions: object;

  constructor(public http: HttpClient) { 
    this.chartOptions = {
      width: 720,
      height: 480,
      chartArea: { left: 10, top: 10, bottom: 0, height: '100%' },
      displayMode: 'regions',
      colorAxis: {
        colors: [
          '#F7FCFD',
          'orange',
        ]
      },
      legend: 'none',
      tooltip: {
        isHtml: true,
      },
    };
    this.chartColumns = [
      'State',
      'Access to electricity (% of population)'
    ];
    this.chartType = 'GeoChart';
    this.chartTitle = 'Access to electricity (% of population)';
  }

  prepareElectricityAccessData = (data: ElectricityAccess[]) => {
   
    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Access to electricity (% of population)'],
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('Access to electricity (% of population)', 'GeoChart', this.chartData, this.chartColumns, this.chartOptions));
    console.log(this.chartDataArray)
  };

  ngOnInit(): void {
    this.obsElectricityAccess = this.http.get<ElectricityAccess[]>(
      `http://127.0.0.1:5000/linee`
    );
    this.obsElectricityAccess.subscribe(this.prepareElectricityAccessData);
  }
}
