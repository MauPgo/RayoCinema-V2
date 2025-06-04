import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Usuario {
  correo: string;
  contrasena: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5250/api/Usuarios';

  constructor(private http: HttpClient) {}

  login(usuario: any): Observable<any> {
    const payload = {
      id: 0,
      nombre: '',
      correo: usuario.correo,
      contrasena: usuario.contrasena
    };
  
    console.log('Enviando login con:', payload);
  
    return this.http.post(`${this.apiUrl}/login`, payload);
  } 

  registrar(usuario: any) {
    return this.http.post('http://localhost:5250/api/Usuarios/registro', usuario);
  }
  
}
