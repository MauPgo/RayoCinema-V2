import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

//crea el array de las películas
export class SeriesComponent {
  peliculas = [
    {
      id: 2,
      titulo: "COBRA KAI",
      imagen: "assets/images/cobra.webp",
      calificacion: 4.8,
      descripcion: "Una serie que te transportará al mundo del karate"
  },
  {
      id: 4,
      titulo: "ORANGE",
      imagen: "assets/images/orange.webp",
      calificacion: 3.5,
      descripcion: "Vive la experiencia de como es la vida de las chicas en la cárcel"
  },
  {
      id: 6,
      titulo: "YOU",
      imagen: "assets/images/you.jpeg",
      calificacion: 3.0,
      descripcion: "Vive en carne propia el terror de sentirte perseguido por alguien loco"
  },
  {
      id: 8,
      titulo: "BRIDGERTON",
      imagen: "assets/images/bridgerton.jpeg",
      calificacion: 4.5,
      descripcion: "Revive la época de los reyes y reinas"
  },
  {
      id: 10,
      titulo: "CROWN",
      imagen: "assets/images/crown.avif",
      calificacion: 4.2,
      descripcion: "Descubre la difícil vida de  la realeza"
  },
  {
      id: 12,
      titulo: "DAHMER",
      imagen: "assets/images/dhamer.avif",
      calificacion: 4.2,
      descripcion: "La historia de uno de los asesinos más violentos que ha existido"
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
