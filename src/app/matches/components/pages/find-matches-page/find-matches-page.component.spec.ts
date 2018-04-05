import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatchesPageComponent } from './find-matches-page.component';

describe('FindMatchesPageComponent', () => {
  let component: FindMatchesPageComponent;
  let fixture: ComponentFixture<FindMatchesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMatchesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
