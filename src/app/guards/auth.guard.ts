import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/jwt/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthServiceService) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      // El usuario tiene un token válido, permitir el acceso.
      //if (this.authService.validateToken(token)) {
        // El token es válido, permitir el acceso.
        return true;
      //}
      
    }

    // El usuario no tiene un token válido, redirigir a la página de inicio de sesión.
    this.router.navigate(['/login']);
    return false;
  }
}