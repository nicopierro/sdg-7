import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaDifferenceChartComponent } from './ea-difference-chart.component';

describe('EaDifferenceChartComponent', () => {
  let component: EaDifferenceChartComponent;
  let fixture: ComponentFixture<EaDifferenceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaDifferenceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaDifferenceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
