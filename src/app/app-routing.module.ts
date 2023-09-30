import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Importa el AuthGuard desde su ubicación
import { LoginComponentComponent } from './components/Auth/login-component/login-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
import { AdminAuthGuard } from './guards/Admin.Auth.Guard';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  //{ path: 'home', component: HomeComponentComponent, canActivate: [AuthGuard] },
  //{ path: 'profile', component: ProfileComponentComponent, canActivate: [AuthGuard] },
  { path: 'pedido' ,component:PedidoComponent},
  //{ path: 'admin', component: AdminComponentComponent, canActivate: [AdminAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //providers: [AuthGuard, AdminAuthGuard], // Agrega el AuthGuard como proveedor
  exports: [RouterModule]
})
export class AppRoutingModule { }