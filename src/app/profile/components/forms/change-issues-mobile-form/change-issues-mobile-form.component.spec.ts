import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIssuesMobileFormComponent } from './change-issues-mobile-form.component';

describe('ChangeIssuesMobileFormComponent', () => {
  let component: ChangeIssuesMobileFormComponent;
  let fixture: ComponentFixture<ChangeIssuesMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIssuesMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIssuesMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
