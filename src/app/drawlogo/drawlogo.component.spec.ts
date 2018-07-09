import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawlogoComponent } from './drawlogo.component';

describe('DrawlogoComponent', () => {
  let component: DrawlogoComponent;
  let fixture: ComponentFixture<DrawlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
