import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

//crea el array de las películas
export class PeliculasComponent {
  peliculas = [
    {
      id: 1,
      titulo: "HARRY POTTER",
      imagen: "assets/images/hp.webp",
      calificacion: 4.5,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
    },
    {
      id: 3,
      titulo: "TOP GUN",
      imagen: "assets/images/topgun.jpg",
      calificacion: 5.0,
      descripcion: "Siente la emoción de volar los aviones más rápidos del planeta"
    },
    {
      id: 5,
      titulo: "CARS",
      imagen: "assets/images/cars.webp",
      calificacion: 4.0,
      descripcion: "Unos bellos autos cobran vida y viven una gran aventura en la carretera"
    },
    {
      id: 7,
      titulo: "MINECRAFT",
      imagen: "assets/images/minecraft.avif",
      calificacion: 5.0,
      descripcion: "Una película de uno de los juegos más populares del planeta"
    },
    {
      id: 9,
      titulo: "AVENGERS",
      imagen: "assets/images/avengers.webp",
      calificacion: 4.2,
      descripcion: "Un grupo de superhéroes se junta para vencer a un villano fuera de este mundo"
    },
    {
      id: 11,
      titulo: "COMO ENTRENAR A TU DRAGON",
      imagen: "assets/images/dragon.webp",
      calificacion: 4.2,
      descripcion: "Nunca te imaginaste como sería tener un dragón de mascota"
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
