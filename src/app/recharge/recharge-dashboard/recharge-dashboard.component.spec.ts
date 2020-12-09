import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeDashboardComponent } from './recharge-dashboard.component';

describe('RechargeDashboardComponent', () => {
  let component: RechargeDashboardComponent;
  let fixture: ComponentFixture<RechargeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
