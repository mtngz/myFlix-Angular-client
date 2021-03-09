import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declaring the api url that will provide data for the client app
/**
 *  Declaring the API URL providing the data for the client-side app
 */
const apiUrl = 'https://marvelix.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // Making the api call for the user registration endpoint
  /**
   * API call to the user registration endpoint
   * @param userDetails 
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to the user login endpoint
  /**
   * API call to the user login endpoint
   * @param userDetails 
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to the get all movies endpoint
  /**
   * API call to get data of all movies
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to get single movie information
  /**
   * API call to get data about a single movie by title
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  //making the api call to get director data
  /**
   * API call to get data about a director by name
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  //making the api call to get phase data
  /**
   * API call to get data about a phase by movie title
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  //making the api call to get user data by username
  /**
   * API call to get user data by username
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to get a user's favorite movies
  /**
   * API call to get user's favorite movies
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to add a movie to a user's list of favorites
  /**
   * API call add a movie to the user's list of favorites
   * @param id 
   */
  addFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${username}/favorites/${id}`, id, { 
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to edit a user's information
  /**
   * API call to edit a user's information
   * @param userData 
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to delete a user
  /**
   * API call to delete a user
   */
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

  /**
   * Inject the HttpClient module to the constructor params
   * providing HttpClient to the entire class, making it available via this.http
   * @param http 
   */
  constructor(private http: HttpClient) { }

  // making the api call to add a movie to a user's list of favorites
  /**
   * API call to delete a movie from the user's list of favorites
   * @param id 
   */
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