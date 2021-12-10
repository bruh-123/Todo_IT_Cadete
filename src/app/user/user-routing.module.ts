import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { UserGuardGuard } from '../shared/guards/user-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,canActivateChild:[UserGuardGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'viajes', component: ViajesComponent },
      { path: 'historial', component: HistorialComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
