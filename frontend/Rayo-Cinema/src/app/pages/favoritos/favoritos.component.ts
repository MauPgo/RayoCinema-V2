import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})

//crear el array de las películas
export class FavoritosComponent {
  peliculas = [
    {
      id: 2,
      titulo: "COBRA KAI",
      imagen: "assets/images/cobra.webp",
      calificacion: 4.8,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  },
  {
      id: 4,
      titulo: "ORANGE",
      imagen: "assets/images/orange.webp",
      calificacion: 3.5,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  },
  {
      id: 6,
      titulo: "YOU",
      imagen: "assets/images/you.jpeg",
      calificacion: 3.0,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  },
  {
      id: 7,
      titulo: "MINECRAFT",
      imagen: "assets/images/minecraft.avif",
      calificacion: 5.0,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  },
  {
      id: 9,
      titulo: "AVENGERS",
      imagen: "assets/images/avengers.webp",
      calificacion: 4.2,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  },
  {
      id: 11,
      titulo: "COMO ENTRENAR A TU DRAGON",
      imagen: "assets/images/dragon.webp",
      calificacion: 4.2,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  }
  ];

  constructor(private router: Router) {}

  //función que recibe el id como parámetro y te redirige a detalle con el id de la película
  irADetalle(id: number) {
    this.router.navigate([`/detalle`, id]);
  }

  //función que te redirige a login al dar click en cerrar sesión
logout(): void {
  this.router.navigate(['/login']);
}
}
