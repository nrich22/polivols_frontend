import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatchesFormComponent } from './find-matches-form.component';

describe('FindMatchesFormComponent', () => {
  let component: FindMatchesFormComponent;
  let fixture: ComponentFixture<FindMatchesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMatchesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMatchesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
