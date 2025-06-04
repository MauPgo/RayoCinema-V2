import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';
  error: string = '';
  exito: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  registrar() {
    const nuevoUsuario = {
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena
    };
  
    this.auth.registrar(nuevoUsuario).subscribe({
      next: (res) => {
        console.log('Registro exitoso:', res);
        this.exito = '¡Usuario registrado con éxito!';
        this.error = '';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        console.error('Error en el registro:', err);
  
        if (err.status === 409) {
          this.error = 'El correo ya está registrado.';
        } else {
          this.error = 'Ocurrió un error al registrar el usuario.';
        }
  
        this.exito = '';
      }
    });
  }
  
  
}
