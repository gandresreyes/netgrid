import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

  {path: 'inicio', component:UsuariosComponent},
  {path:'', redirectTo:'inicio', pathMatch: 'full'},
  {path:'**', redirectTo:'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
