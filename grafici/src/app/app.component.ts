import { Component } from '@angular/core';
import { ElectricityAccessChartComponent } from './electricity-access-chart/electricity-access-chart.component';
import { ElectricityAccess } from './models/electricity-access.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grafici';
  chartDataArray = new Array<ElectricityAccessChartComponent>();


}
