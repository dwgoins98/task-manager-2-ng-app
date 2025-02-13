/**
 * @fileoverview This file contains the TaskService which manages tasks within the application.
 *
 * @description
 * The TaskService provides methods to add new tasks and update the status of existing tasks.
 * It uses Angular's dependency injection to include the LoggingService for logging actions.
 *
 * @example
 * // Inject the TasksService in a component
 * private tasksService = inject(TasksService);
 *
 * // Add a new task
 * this.tasksService.addTask({ title: 'New Task Title', description: 'Task description' });
 *
 * // Update the status of an existing task
 * this.tasksService.updateTaskStatus('task-id', 'completed');
 */

import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './tasks.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  private loggingService = inject(LoggingService);

  /**
   * Adds a new task to the list of tasks.
   * @param taskData - An object containing the title and description of the task.
   */
  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);

    this.loggingService.log('Task added with title ' + taskData.title);
  }

  /**
   * Updates the status of an existing task.
   * @param id - The ID of the task to update.
   * @param newStatus - The new status of the task.
   */
  updateTaskStatus(id: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );

    this.loggingService.log('Task status updated to ' + newStatus);
  }
}
