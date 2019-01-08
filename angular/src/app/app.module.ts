import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Angular imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Components imports */
import { MaterialModule } from './material-module';

/* Layout imports */
import { HeaderComponent } from './layout/header/header.component';
import { ProjectsBoardComponent } from './layout/projects-board/projects-board.component';
import { TasksBoardComponent } from './layout/tasks-board/tasks-board.component';

/* Page imports */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';

/* Task imports */
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task/taskList.component';
import { AddTaskComponent } from './components/task/addTask.component';
import { EditTaskComponent } from './components/task/editTask.component';

/* Project imports*/
import { ProjectComponent } from './components/project/project.component';
import { AddProjectComponent } from './components/project/addProject.component';
import { ProjectsListComponent } from './components/project/projectsList.component';
import { LoginPageComponent } from './pages/login-page/loginPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TasksBoardComponent,
    TaskComponent,
    AddTaskComponent,
    TaskListComponent,
    ProjectsBoardComponent,
    ProjectComponent,
    AddProjectComponent,
    ProjectsListComponent,
    LoginComponent,
    RegisterComponent,
    EditTaskComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditTaskComponent, AddProjectComponent]
})
export class AppModule { }
