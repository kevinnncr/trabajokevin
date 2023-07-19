import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenasComponent } from './venas.component';

describe('VenasComponent', () => {
  let component: VenasComponent;
  let fixture: ComponentFixture<VenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenasComponent]
    });
    fixture = TestBed.createComponent(VenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
