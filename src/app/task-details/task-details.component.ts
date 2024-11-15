import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoInterface } from '../interface/toDo';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskId!: number;
  taskDetails?: ToDoInterface;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.loadTaskDetails();
    });
  }

  loadTaskDetails() {
    this.taskDetails = this.todoService.fetchTask().find(task => task.id === this.taskId);
  }

  changeStatus(event: Event) {
    const selectElement = event.target as HTMLSelectElement; 
    const newStatus = selectElement.value;

    if (this.taskDetails) {
      this.taskDetails.priority = newStatus;
      this.todoService.updateTaskStatus(this.taskId, newStatus);
      alert(`Task status changed to ${newStatus}`);
    }
  }

  deleteTaskAndGoBack() {
    this.todoService.deleteTask(this.taskId);
    alert('Task deleted successfully');
    this.router.navigate(['/view-all']); 
  }
}
