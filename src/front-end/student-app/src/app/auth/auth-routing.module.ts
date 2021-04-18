import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
//   {
//     path: 'notfound',
//     component: AuthComponent,
//     canActivate: [],
//   },
//   {
//     path: 'forbidden',
//     component: ForbiddenComponent,
//     canActivate: [],
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
