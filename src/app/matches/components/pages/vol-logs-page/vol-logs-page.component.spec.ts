import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolLogsPageComponent } from './vol-logs-page.component';

describe('VolLogsPageComponent', () => {
  let component: VolLogsPageComponent;
  let fixture: ComponentFixture<VolLogsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolLogsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
