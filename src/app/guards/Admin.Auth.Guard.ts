import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si el usuario es un administrador (por ejemplo, comprobar roles o permisos).
    if (this.isUserAdmin()) {
      return true; // El usuario es un administrador, permitir el acceso.
    }

    // Si el usuario no es un administrador, redirigir a una página de acceso denegado o a donde lo desees.
    this.router.navigate(['/access-denied']);
    return false;
  }

  private isUserAdmin(): boolean {
    // Lógica para verificar si el usuario es un administrador (por ejemplo, comprobar roles o permisos).
    // Retorna true si el usuario es un administrador, de lo contrario, retorna false.
    return true; // Cambia esto según tus reglas de autorización.
  }
}