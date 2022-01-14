import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricityAccessChartComponent } from './electricity-access-chart/electricity-access-chart.component';
import { ElectricityAccessComponent } from './electricity-access/electricity-access.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectricityAccessChartComponent,
    ElectricityAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
