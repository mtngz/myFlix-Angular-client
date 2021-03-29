# **MyFlix-Angular-Client**

This project is an Angular application that allows users to get information about movies, genres, and directors. Users can also save movies in their list of favorites and edit details of their profile. This application uses an existing server-side REST API ([https://github.com/mtngz/movie_api](https://github.com/mtngz/movie_api)) and MongoDB database.

### The application is deployed here [https://mean-marvelix.netlify.app/](https://mean-marvelix.netlify.app/).

# Demo

![Screen recording of project demo](docs/assets/images/angular.gif)

# Features

- Displays a welcome screen where users can log in or register for a new account.
- Users are authenticated, then they can view all movies.
- In the main view showing all movies, users can click on buttons to view:
  - a description about the movie.
  - the genre of the movie and details about the genre.
  - the director of the movie and details about the director.
- In this main view, users can add and remove movies from their list of favorites.
- Users can also view their profile where they can see their favorite movies, remove movies from their favorites, and edit their profile details.

# Technologies

- Requires Node.js and npm
- Code written in Angular
- Code written with Angular framework in TypeScript
- Designed using Angular Material
- Documented using Typedoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
