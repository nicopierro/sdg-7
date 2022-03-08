import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricitySourceComponent } from './electricity-source.component';

describe('ElectricitySourceComponent', () => {
  let component: ElectricitySourceComponent;
  let fixture: ComponentFixture<ElectricitySourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricitySourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricitySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
