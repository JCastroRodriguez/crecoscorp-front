import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarSolicitantesComponent } from './components/listar-solicitantes/listar-solicitantes.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroSolicitanteComponent } from './components/registro-solicitante/registro-solicitante.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'inicio', component: InicioComponent, data: { title: 'Inicio' },},
      { path: 'perfil', component: PerfilComponent, data: { title: 'Perfiles del sistema' } },
      { path: 'usuario', component: UsuarioComponent, data: { title: 'Usuarios del sistema' } },
      { path: 'registro-solicitante', component: RegistroSolicitanteComponent, data: { title: 'Registro de solicitante' } },
      { path: 'listar-solicitantes', component: ListarSolicitantesComponent, data: { title: 'Listado de solicitantes' } },
      /*{ path: 'persona', component: PersonaComponent, canActivate : [SessionGuard], data: { title: 'Personas del sistema' } },
      { path: 'usuario', component: UsuarioComponent, canActivate : [SessionGuard], data: { title: 'Usuarios del sistema' } },*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
