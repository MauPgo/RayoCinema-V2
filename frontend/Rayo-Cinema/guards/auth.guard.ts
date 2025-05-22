import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const estaAutenticado = !!localStorage.getItem('usuario');

  console.log('¿Está autenticado?', estaAutenticado);

  if (!estaAutenticado) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
