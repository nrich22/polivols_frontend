import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMobileFormComponent } from './about-mobile-form.component';

describe('AboutMobileFormComponent', () => {
  let component: AboutMobileFormComponent;
  let fixture: ComponentFixture<AboutMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
