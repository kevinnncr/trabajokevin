import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedosComponent } from './dedos.component';

describe('DedosComponent', () => {
  let component: DedosComponent;
  let fixture: ComponentFixture<DedosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DedosComponent]
    });
    fixture = TestBed.createComponent(DedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
