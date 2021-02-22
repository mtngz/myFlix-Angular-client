import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declaring the api url that will provide data for the client app
const apiUrl = 'https://marvelix.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) { }

  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  // making the api call to the user login endpoint
  public userLogin(userDetails: any): Observable<any> {
    // const token = localStorage.getItem('token');
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails)
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetAllMoviesService {

  constructor(private http: HttpClient) { }

  // making the api call to the get all movies endpoint
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetSingleMovieService {
  constructor(private http: HttpClient) { }

  // making the api call to get single movie information
  getSingleMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetDirectorService {
  constructor(private http: HttpClient) { }

  //making the api call to get director data
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/directors/:Name', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetPhaseService {
  constructor(private http: HttpClient) { }

  //making the api call to get phase data
  getPhase(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/phases/:Title', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(private http: HttpClient) { }

  //making the api call to get user data by username
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.get(apiUrl + `users/${username}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetFavoriteMoviesService {
  constructor(private http: HttpClient) { }

  // making the api call to get a user's favorite movies
  getFavoriteMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.get(apiUrl + `users/${username}/`, { // not an endpoint itself in the API
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class AddFavoriteMovieService {
  constructor(private http: HttpClient) { }

  // making the api call to add a movie to a user's list of favorites
  addFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${username}/favorites/${id}`, id, { // "post" or "put" here?
      headers: new HttpHeaders ({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) { }

  // making the api call to edit a user's information
  editUser(userData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.put(apiUrl + `users/${username}`, userData, {
      headers: new HttpHeaders ({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  constructor(private http: HttpClient) { }

  // making the api call to delete a user
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}`, {
      headers: new HttpHeaders ({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteFavoriteMovieService {
  constructor(private http: HttpClient) { }

  // making the api call to add a movie to a user's list of favorites
  deleteFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}/favorites/${id}`, {
      headers: new HttpHeaders ({
        Authorization: 'Bearer ' + token,
      })
    }).pipe(map(this.extractResponseData),
    catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Object): any { // "res: Response" caused an error above on "this.extractResponseData"
    const body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}