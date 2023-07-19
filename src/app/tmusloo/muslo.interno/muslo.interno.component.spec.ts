import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusloInternoComponent } from './muslo.interno.component';

describe('MusloInternoComponent', () => {
  let component: MusloInternoComponent;
  let fixture: ComponentFixture<MusloInternoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusloInternoComponent]
    });
    fixture = TestBed.createComponent(MusloInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
