import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguaComponent } from './lengua.component';

describe('LenguaComponent', () => {
  let component: LenguaComponent;
  let fixture: ComponentFixture<LenguaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguaComponent]
    });
    fixture = TestBed.createComponent(LenguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
