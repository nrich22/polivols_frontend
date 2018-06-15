import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolLogsMobileFormComponent } from './vol-logs-mobile-form.component';

describe('VolLogsMobileFormComponent', () => {
  let component: VolLogsMobileFormComponent;
  let fixture: ComponentFixture<VolLogsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolLogsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolLogsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
