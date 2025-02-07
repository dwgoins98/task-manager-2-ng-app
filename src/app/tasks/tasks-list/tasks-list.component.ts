import { Component, inject, signal } from '@angular/core';
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
  selectedFilter = signal<string>('all');
  tasks = this.tasksService.allTasks;

  onSelectedFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
