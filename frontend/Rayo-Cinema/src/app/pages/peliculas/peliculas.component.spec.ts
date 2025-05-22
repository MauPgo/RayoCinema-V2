import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculasComponent } from './peliculas.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener la lista de peliculas', () => {
    expect(component.peliculas.length).toBeGreaterThan(0);
  });

  it('debe navegar a detalle con el id correcto', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.irADetalle(5);
    expect(navigateSpy).toHaveBeenCalledWith(['/detalle', 5]);
  });
});
