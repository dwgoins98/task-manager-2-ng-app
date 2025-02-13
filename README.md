# TaskManager2NgApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Overview
THIS IS AN EXAMPLE FRONT-END USER INTERFACE
This app was built for educational purposes for training with Angular

TaskManager2NgApp is a task management application designed to help users organize and track their tasks efficiently. The application provides features such as task creation, editing, deletion, and categorization.


## File Structure

The project follows a standard Angular project structure. Below is a brief overview of the key files and directories:

- `src/`: Contains the source code of the application.
    - `app/`: Contains the main application module and components.
        - `app.component.ts`: The root component of the application.
        - `app.module.ts`: The root module that declares and imports other modules and components.
        - `task/`: Contains components related to task management.
            - `task-list.component.ts`: Displays a list of tasks.
            - `task-detail.component.ts`: Displays details of a specific task.
            - `task.service.ts`: Provides task-related services such as fetching and updating tasks.
    - `assets/`: Contains static assets such as images and styles.
    - `environments/`: Contains environment-specific configuration files.
        - `environment.ts`: Configuration for the development environment.
        - `environment.prod.ts`: Configuration for the production environment.
- `angular.json`: Configuration file for Angular CLI.
- `package.json`: Lists the project's dependencies and scripts.
- `README.md`: Provides information about the project.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
