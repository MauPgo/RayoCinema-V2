import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule.withRoutes([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería tener una lista no vacía de películas', () => {
    expect(component.peliculas.length).toBeGreaterThan(0);
  });

  it('Debe navegar a detalle con el id correcta', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.irADetalle(3);
    expect(navigateSpy).toHaveBeenCalledWith(['/detalle', 3]);
  });

  it('debe navegar del login al logout', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.logout();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
