import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  @ViewChild('myform') toDoForm!: NgForm;

  constructor(private toDoService: TodoService) { }

  onSubmit() {
    if (this.toDoForm.valid) {
      this.toDoService.addTask(this.toDoForm.value);
      this.toDoForm.reset();
    }
  }
}
