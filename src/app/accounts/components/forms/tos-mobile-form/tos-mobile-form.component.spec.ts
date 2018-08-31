import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TosMobileFormComponent } from './tos-mobile-form.component';

describe('TosMobileFormComponent', () => {
  let component: TosMobileFormComponent;
  let fixture: ComponentFixture<TosMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TosMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
