import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-electricity-access',
  templateUrl: './electricity-access.component.html',
  styleUrls: ['./electricity-access.component.css']
})
export class ElectricityAccessComponent implements AfterViewInit {


  constructor(public http: HttpClient) { }


  ngAfterViewInit(): void {

  }

}
