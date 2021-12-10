import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './pages/login/loginPage.component';
import { LoginGuard } from '../shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,canActivateChild:[LoginGuard],
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
