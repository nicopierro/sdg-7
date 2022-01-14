import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityAccessComponent } from './electricity-access.component';

describe('ElectricityAccessComponent', () => {
  let component: ElectricityAccessComponent;
  let fixture: ComponentFixture<ElectricityAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
