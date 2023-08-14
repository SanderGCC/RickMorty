import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLugaresComponent } from './detalle-lugares.component';

describe('DetalleLugaresComponent', () => {
  let component: DetalleLugaresComponent;
  let fixture: ComponentFixture<DetalleLugaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleLugaresComponent]
    });
    fixture = TestBed.createComponent(DetalleLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
