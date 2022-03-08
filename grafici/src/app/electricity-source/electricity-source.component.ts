import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electricity-source',
  templateUrl: './electricity-source.component.html',
  styleUrls: ['./electricity-source.component.css']
})
export class ElectricitySourceComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

}
