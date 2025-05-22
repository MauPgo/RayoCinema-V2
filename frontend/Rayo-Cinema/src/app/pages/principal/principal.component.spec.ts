import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalComponent } from './principal.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener una lista de topMovies', () => {
    expect(component.topMovies.length).toBeGreaterThan(0);
  });

  
});
