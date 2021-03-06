import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TasksBoardComponent } from './layout/tasks-board/tasks-board.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { LoginPageComponent } from './pages/login-page/loginPage.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'login', pathMatch: 'full'
  // },
  {
    path: '', component: LoginPageComponent,
    children: [
      {
        path: '', component: LoginComponent,
      },
      {
        path: 'register', component: RegisterComponent,
      }
    ]
  },
  {
    path: 'projects', component: HomePageComponent, canActivate: [AuthGuard],
    children: [
      {
        path: ':id', component: TasksBoardComponent, canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
