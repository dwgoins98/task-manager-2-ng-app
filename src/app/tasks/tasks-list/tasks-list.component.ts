import { Component, computed, inject, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  tasks = computed(() => {
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

  onSelectedFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
