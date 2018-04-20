import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeIssuesPageComponent } from './change-issues-page.component';

describe('ChangeIssuesPageComponent', () => {
  let component: ChangeIssuesPageComponent;
  let fixture: ComponentFixture<ChangeIssuesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeIssuesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeIssuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
