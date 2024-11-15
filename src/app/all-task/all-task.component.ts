import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { ToDoInterface } from '../interface/toDo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
  priorityType: string = 'all';
  allTask: ToDoInterface[] = [];
  filteredTasks: ToDoInterface[] = [];

  constructor(private toDoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTask();
  }

  fetchTask() {
    this.allTask = this.toDoService.fetchTask();
    this.priorityChange();
  }

  viewTask(id: number) {
    this.router.navigate([`/view-task`,id]);
  }

  priorityChange(event?: Event) {
    if (event) {
      const selectedElement = event.target as HTMLSelectElement;
      this.priorityType = selectedElement.value;
    }

    this.filteredTasks = this.priorityType === 'all'
      ? this.allTask
      : this.allTask.filter(task => task.priority === this.priorityType);
  }

  changeStatus(id: number, event: Event) {
    const newStatus = (event.target as HTMLSelectElement).value;
    this.toDoService.updateTaskStatus(id, newStatus);
    this.fetchTask();
  }
}
