import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'os', loadChildren: () => import('./os/os.module').then(m => m.OsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'funcionario', loadChildren: () => import('./funcionario/funcionario.module').then(m => m.FuncionarioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'maquina', loadChildren: () => import('./maquina/maquina.module').then(m => m.MaquinaModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
