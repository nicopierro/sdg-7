import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaDifferenceComponent } from './ea-difference/ea-difference.component';
import { ElectricityAccessComponent } from './electricity-access/electricity-access.component';
import { ElectricitySourceComponent } from './electricity-source/electricity-source.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: `ElectricityAccess/:anno`, component: ElectricityAccessComponent},
  { path: 'AccessToElectricity2010vs2019', component: EaDifferenceComponent},
  { path: 'SharedElectricitySource', component: ElectricitySourceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
