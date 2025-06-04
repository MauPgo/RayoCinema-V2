import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/principal/principal.component').then(m => m.PrincipalComponent),
  },
  {
    path: 'index',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.component').then(m => m.RegistroComponent),
  },
  {
    path: 'peliculas',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/peliculas/peliculas.component').then(m => m.PeliculasComponent),
  },
  {
    path: 'series',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/series/series.component').then(m => m.SeriesComponent),
  },
  {
    path: 'detalle/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/detalle/detalle.component').then(m => m.DetalleComponent),
  },
  {
    path: 'favoritos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/favoritos/favoritos.component').then(m => m.FavoritosComponent),
  },
];
