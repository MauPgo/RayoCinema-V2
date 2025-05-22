import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesComponent } from './series.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener una lista de series', () => {
    expect(component.peliculas.length).toBeGreaterThan(0);
  });

  it('debe navegar a detalle con el id de la serie', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.irADetalle(10);
    expect(navigateSpy).toHaveBeenCalledWith(['/detalle', 10]);
  });
});
