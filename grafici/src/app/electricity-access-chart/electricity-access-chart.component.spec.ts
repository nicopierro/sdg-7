import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityAccessChartComponent } from './electricity-access-chart.component';

describe('ElectricityAccessChartComponent', () => {
  let component: ElectricityAccessChartComponent;
  let fixture: ComponentFixture<ElectricityAccessChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityAccessChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityAccessChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
