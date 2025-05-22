import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//crear el array de las películas
export class HomeComponent {
  peliculas = [
    {
      id: 1,
      titulo: "HARRY POTTER",
      imagen: "assets/images/hp.webp",
      calificacion: 4.5,
      descripcion: "Una saga mágica de aventuras en Hogwarts"
  },
  {
      id: 2,
      titulo: "COBRA KAI",
      imagen: "assets/images/cobra.webp",
      calificacion: 4.8,
      descripcion: "Una serie que te transportará al mundo del karate"
  },
  {
      id: 3,
      titulo: "TOP GUN",
      imagen: "assets/images/topgun.jpg",
      calificacion: 5.0,
      descripcion: "Siente la emoción de volar los aviones más rápidos del planeta"
  },
  {
      id: 4,
      titulo: "ORANGE",
      imagen: "assets/images/orange.webp",
      calificacion: 3.5,
      descripcion: "Vive la experiencia de como es la vida de las chicas en la cárcel"
  },
  {
      id: 5,
      titulo: "CARS",
      imagen: "assets/images/cars.webp",
      calificacion: 4.0,
      descripcion: "Unos bellos autos cobran vida y viven una gran aventura en la carretera"
  },
  {
      id: 6,
      titulo: "YOU",
      imagen: "assets/images/you.jpeg",
      calificacion: 3.0,
      descripcion: "Vive en carne propia el terror de sentirte perseguido por alguien loco"
  },
  {
      id: 7,
      titulo: "MINECRAFT",
      imagen: "assets/images/minecraft.avif",
      calificacion: 5.0,
      descripcion: "Una película de uno de los juegos más populares del planeta"
  },
  {
      id: 8,
      titulo: "BRIDGERTON",
      imagen: "assets/images/bridgerton.jpeg",
      calificacion: 4.5,
      descripcion: "Revive la época de los reyes y reinas"
  },
  {
      id: 9,
      titulo: "AVENGERS",
      imagen: "assets/images/avengers.webp",
      calificacion: 4.2,
      descripcion: "Un grupo de superhéroes se junta para vencer a un villano fuera de este mundo"
  },
  {
      id: 10,
      titulo: "CROWN",
      imagen: "assets/images/crown.avif",
      calificacion: 4.2,
      descripcion: "Descubre la difícil vida de  la realeza"
  },
  {
      id: 11,
      titulo: "COMO ENTRENAR A TU DRAGON",
      imagen: "assets/images/dragon.webp",
      calificacion: 4.2,
      descripcion: "Nunca te imaginaste como sería tener un dragón de mascota"
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

  //funcion para navegar a detalle añadiendo el id de la película al link para mostrarlo dinámicamente
  irADetalle(id: number) {
    this.router.navigate([`/detalle`, id]);
  }

  //funcion para redirigir al login al dar click en el botón cerrar sesión
  logout(): void {
    this.router.navigate(['/login']);
  }

  private metodoSinProbar() {
    console.log('Esto nunca se prueba');
  }
  
  }
