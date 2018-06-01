import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsMobileFormComponent } from './logs-mobile-form.component';

describe('LogsMobileFormComponent', () => {
  let component: LogsMobileFormComponent;
  let fixture: ComponentFixture<LogsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
