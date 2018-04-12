import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCampsFormComponent } from './my-camps-form.component';

describe('MyCampsFormComponent', () => {
  let component: MyCampsFormComponent;
  let fixture: ComponentFixture<MyCampsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCampsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCampsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
