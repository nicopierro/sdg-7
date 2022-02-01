import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaDifferenceComponent } from './ea-difference/ea-difference.component';
import { ElectricityAccessComponent } from './electricity-access/electricity-access.component';
import { AccessToElectricity2010vs2019 } from './models/ea-difference.model';

const routes: Routes = [
  { path: 'ElectricityAccess', component: ElectricityAccessComponent},
  { path: 'AccessToElectricity2010vs2019', component: EaDifferenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
