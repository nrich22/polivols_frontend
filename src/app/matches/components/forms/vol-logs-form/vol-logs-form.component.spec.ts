import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolLogsFormComponent } from './vol-logs-form.component';

describe('VolLogsFormComponent', () => {
  let component: VolLogsFormComponent;
  let fixture: ComponentFixture<VolLogsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolLogsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolLogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
