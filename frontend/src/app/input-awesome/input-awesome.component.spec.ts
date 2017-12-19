import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAwesomeComponent } from './input-awesome.component';

describe('InputAwesomeComponent', () => {
  let component: InputAwesomeComponent;
  let fixture: ComponentFixture<InputAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
