import { Injectable } from '@angular/core';
import { ToDoInterface } from '../interface/toDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDo: ToDoInterface[] = [];

  constructor() {}

  addTask(data: ToDoInterface) {
    this.toDo.push({ ...data, id: this.toDo.length + 1 });
  }

  fetchTask(): ToDoInterface[] {
    return this.toDo;
  }

  updateTaskStatus(id: number, newStatus: string) {
    const task = this.toDo.find(task => task.id === id);
    if (task) {
      task.priority = newStatus;
    }
  }

  deleteTask(id: number) {
    this.toDo = this.toDo.filter(task => task.id !== id);
  }
}
  