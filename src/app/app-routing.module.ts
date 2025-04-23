import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DiasInhabilesComponent } from './components/dias-inhabiles/dias-inhabiles.component';

// Importa los componentes que vas a usar en las rutas


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dias-inhabiles', component: DiasInhabilesComponent },
  // Otras rutas según tu estructura...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
