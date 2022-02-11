import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitySourceChartComponent } from './electricity-source-chart.component';

describe('ElectricitySourceChartComponent', () => {
  let component: ElectricitySourceChartComponent;
  let fixture: ComponentFixture<ElectricitySourceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricitySourceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricitySourceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
