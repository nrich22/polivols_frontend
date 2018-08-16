import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TosFormComponent } from './tos-form.component';

describe('TosFormComponent', () => {
  let component: TosFormComponent;
  let fixture: ComponentFixture<TosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
