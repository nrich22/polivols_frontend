import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIssuesFormComponent } from './change-issues-form.component';

describe('ChangeIssuesFormComponent', () => {
  let component: ChangeIssuesFormComponent;
  let fixture: ComponentFixture<ChangeIssuesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIssuesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIssuesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
