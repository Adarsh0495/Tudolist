import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-task', pathMatch: 'full'},
  { path: 'add-task', component: AddTasksComponent },
  { path: 'view-all', component: AllTaskComponent },
  { path: 'view-task/:id', component: TaskDetailsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
