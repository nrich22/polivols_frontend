import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesMobileFormComponent } from './issues-mobile-form.component';

describe('IssuesMobileFormComponent', () => {
  let component: IssuesMobileFormComponent;
  let fixture: ComponentFixture<IssuesMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
