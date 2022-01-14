import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-electricity-access',
  templateUrl: './electricity-access.component.html',
  styleUrls: ['./electricity-access.component.css']
})
export class ElectricityAccessComponent implements AfterViewInit {
  obsVett: Observable<ElectricityAccessComponent[]>; //Crea un observable per ricevere i vettori energetici

  constructor(public http: HttpClient) { }

  prepareVectData = (data: ElectricityAccessComponent[]) => {


    
  }




  ngAfterViewInit(): void {
    this.obsVett = this.http.get<ElectricityAccessComponent[]>(`https://5000-white-aardvark-yuka8omo.ws-prod-ws-eu19.gitpod.io/ci_vettore/140`);
    this.obsVett.subscribe(this.prepareVectData);
  
  }

}
