import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit {
  constructor(private router: Router) {}

  topMovies = [
    { imagen: 'assets/images/1.jpg' },
    { imagen: 'assets/images/2.jpg' },
    { imagen: 'assets/images/3.jpg' },
    { imagen: 'assets/images/4.jpg' },
    { imagen: 'assets/images/5.jpg' },
    { imagen: 'assets/images/6.jpg' },
    { imagen: 'assets/images/7.jpg' },
    { imagen: 'assets/images/8.jpg' }
  ];

  //Inicializa un nuevo carrusel Swiper para mostrarlo en la página principal
  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true
      }
    });
  }

  //función que te redirige a login al dar click en inicia sesión
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
