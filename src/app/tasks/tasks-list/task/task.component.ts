import { Component, computed, input, signal } from '@angular/core';
import { Task, TaskStatus } from '../../tasks.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'done':
        return 'Done';
      case 'pending':
        return 'Pending';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'open';
    }
  });

  onChangeTaskStatus(taskID: string, status: string) {
    // This is where you would update the task status in the database
    let newStatus: TaskStatus = 'open';
    switch (status) {
      case 'open':
        newStatus = 'open';
        break;
      case 'done':
        newStatus = 'done';
        break;
      case 'pending':
        newStatus = 'pending';
        break;
      case 'in-progress':
        newStatus = 'in-progress';
        break;
      default:
        break;
    }
  }
}
