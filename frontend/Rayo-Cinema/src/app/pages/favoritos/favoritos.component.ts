import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.obtenerFavoritos();
  }

  obtenerFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    this.peliculas = favoritos ? JSON.parse(favoritos) : [];
  }

  irADetalle(id: number) {
    this.router.navigate(['/detalle', id]);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  eliminarFavorito(id: number) {
    this.peliculas = this.peliculas.filter(p => p.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(this.peliculas));
  }
}
