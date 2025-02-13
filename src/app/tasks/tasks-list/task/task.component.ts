import { Component, computed, inject, input } from '@angular/core';
import { Task, TaskStatus } from '../../tasks.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../tasks.service';

/**
 * TaskComponent is responsible for displaying and managing individual tasks.
 * It uses Angular's dependency injection to get an instance of TasksService.
 * The component also uses Angular's FormsModule for handling form inputs.
 */
@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // Injecting the TasksService to interact with task data
  private taskService = inject(TasksService);

  // Input property to receive a task object from the parent component
  task = input.required<Task>();

  // Computed property to get the human-readable status of the task
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

  /**
   * Method to change the status of a task.
   * @param taskID - The ID of the task to update.
   * @param status - The new status to set for the task.
   */
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

    // Update the task status using the task service
    this.taskService.updateTaskStatus(taskID, newStatus);
  }
}
