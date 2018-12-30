import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TasksBoardComponent } from './layout/tasks-board/tasks-board.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'projects', pathMatch: 'full'
  },
  {
    path: 'projects', component: HomePageComponent,
    children: [
      {
        path: ':id', component: TasksBoardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
