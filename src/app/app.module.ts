import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskInfoService } from './task-info.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
