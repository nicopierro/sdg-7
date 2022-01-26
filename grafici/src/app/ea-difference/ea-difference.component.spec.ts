import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaDifferenceComponent } from './ea-difference.component';

describe('EaDifferenceComponent', () => {
  let component: EaDifferenceComponent;
  let fixture: ComponentFixture<EaDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
