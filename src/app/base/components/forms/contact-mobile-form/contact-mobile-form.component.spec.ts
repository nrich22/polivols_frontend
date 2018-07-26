import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMobileFormComponent } from './contact-mobile-form.component';

describe('ContactMobileFormComponent', () => {
  let component: ContactMobileFormComponent;
  let fixture: ComponentFixture<ContactMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
