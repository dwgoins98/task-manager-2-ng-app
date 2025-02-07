import { Component, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  tasks: Task[] = [];

  onSelectedFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
