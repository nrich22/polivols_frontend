import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVolsMobileFormComponent } from './my-vols-mobile-form.component';

describe('MyVolsMobileFormComponent', () => {
  let component: MyVolsMobileFormComponent;
  let fixture: ComponentFixture<MyVolsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVolsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVolsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
