/**
 * @fileoverview Component responsible for creating new tasks in the task manager application.
 *
 * @description This component provides a form to input new task details and adds the task to the task list using the TasksService.
 *
 * @example
 * <app-new-task></app-new-task>
 */

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

  /**
   * Adds a new task using the provided title and description.
   * Resets the form after the task is added.
   *
   * @param title - The title of the new task.
   * @param description - The description of the new task.
   */
  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title: title, description: description });
    this.formEl()?.nativeElement.reset();
  }
}
