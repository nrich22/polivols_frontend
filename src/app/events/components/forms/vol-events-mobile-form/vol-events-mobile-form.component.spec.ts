import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolEventsMobileFormComponent } from './vol-events-mobile-form.component';

describe('VolEventsMobileFormComponent', () => {
  let component: VolEventsMobileFormComponent;
  let fixture: ComponentFixture<VolEventsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolEventsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolEventsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
