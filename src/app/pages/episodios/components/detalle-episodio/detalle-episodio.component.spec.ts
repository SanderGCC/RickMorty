import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEpisodioComponent } from './detalle-episodio.component';

describe('DetalleEpisodioComponent', () => {
  let component: DetalleEpisodioComponent;
  let fixture: ComponentFixture<DetalleEpisodioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleEpisodioComponent]
    });
    fixture = TestBed.createComponent(DetalleEpisodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
