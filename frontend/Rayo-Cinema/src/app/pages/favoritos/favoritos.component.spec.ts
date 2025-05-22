import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritosComponent } from './favoritos.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener una lista de peliculas favoritas', () => {
    expect(component.peliculas.length).toBeGreaterThan(0);
  });
});
