/**
 * @fileoverview This file contains the LoggingService which is used to log messages to the console with a timestamp.
 * The service is provided in the root of the application.
 *
 * @description
 * The LoggingService is an Angular service that provides a simple logging mechanism.
 * It logs messages to the console with a timestamp, which can be useful for debugging
 * and tracking the flow of the application.
 *
 * @example
 * // Import the LoggingService in your component or another service
 * import { LoggingService } from './logging.service';
 *
 * // Use the log method to log a message
 * this.loggingService.log('This is a log message');
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  /**
   * Logs a message to the console with a timestamp.
   *
   * @param message The message to be logged.
   *
   * @example
   * this.loggingService.log('User clicked the button');
   */
  log(message: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}]: [${message}]`);
  }
}
