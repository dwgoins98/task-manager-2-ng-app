import { Component, computed, inject, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from '../tasks.service';
import { Task } from '../tasks.model';

/**
 * TasksListComponent is responsible for displaying a list of tasks.
 * It allows filtering tasks based on their status.
 */
@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  // Injecting the TasksService to fetch tasks data
  private tasksService = inject(TasksService);

  // Signal to hold the currently selected filter, defaulted to see all tasks
  private selectedFilter = signal<string>('all');

  // Computed property to get the filtered list of tasks based on the selected filter
  tasks = computed<Task[]>(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'open');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'in-progress');
      case 'pending':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'pending');
      case 'completed':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'done');
      default:
        return this.tasksService.allTasks();
    }
  });

  /**
   * Updates the selected filter and triggers the tasks recomputation.
   * @param filter - The new filter to be applied.
   */
  onSelectedFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
