import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricityAccessChartComponent } from './electricity-access-chart/electricity-access-chart.component';
import { ElectricityAccessComponent } from './electricity-access/electricity-access.component';
import { HttpClientModule } from '@angular/common/http';
import { EaDifferenceComponent } from './ea-difference/ea-difference.component';
import { EaDifferenceChartComponent } from './ea-difference-chart/ea-difference-chart.component';
import { GenericComponent } from './generic/generic.component';
@NgModule({
  declarations: [
    AppComponent,
    ElectricityAccessChartComponent,
    ElectricityAccessComponent,
    EaDifferenceComponent,
    EaDifferenceChartComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
