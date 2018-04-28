import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCampsMobileFormComponent } from './my-camps-mobile-form.component';

describe('MyCampsMobileFormComponent', () => {
  let component: MyCampsMobileFormComponent;
  let fixture: ComponentFixture<MyCampsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCampsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCampsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
