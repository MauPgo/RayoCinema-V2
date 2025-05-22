import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}
  //método para iniciar sesión
  iniciarSesion() {
    this.auth.login({ correo: this.correo, contrasena: this.contrasena }).subscribe({
      next: (usuario) => {
        console.log('Login exitoso:', usuario);

        localStorage.setItem('usuario', JSON.stringify(usuario));

        this.router.navigate(['/index']);
      },
      error: (err) => {
        console.error('Error de login:', err);
        this.error = 'Correo o contraseña incorrectos';
      }
    });
  }
}
