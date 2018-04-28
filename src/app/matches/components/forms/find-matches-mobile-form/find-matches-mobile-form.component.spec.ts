import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatchesMobileFormComponent } from './find-matches-mobile-form.component';

describe('FindMatchesMobileFormComponent', () => {
  let component: FindMatchesMobileFormComponent;
  let fixture: ComponentFixture<FindMatchesMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMatchesMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMatchesMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
