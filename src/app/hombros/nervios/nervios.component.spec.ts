import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerviosComponent } from './nervios.component';

describe('NerviosComponent', () => {
  let component: NerviosComponent;
  let fixture: ComponentFixture<NerviosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NerviosComponent]
    });
    fixture = TestBed.createComponent(NerviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
