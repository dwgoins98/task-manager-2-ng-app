import { Component, ElementRef, inject, viewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title: title, description: description });
    this.formEl()?.nativeElement.reset();
  }
}
