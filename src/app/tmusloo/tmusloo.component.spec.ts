import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmuslooComponent } from './tmusloo.component';

describe('TmuslooComponent', () => {
  let component: TmuslooComponent;
  let fixture: ComponentFixture<TmuslooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmuslooComponent]
    });
    fixture = TestBed.createComponent(TmuslooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
