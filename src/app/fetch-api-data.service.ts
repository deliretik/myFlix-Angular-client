import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  // Get All Movies
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `movies`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    })
  }

// Get One Movie
  public getOneMovie(Title: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `/movies/${Title}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Get Director
  public getDirector(Name: 'string'): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `/directors/${Name}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Get Genre
  public getGenre(Name: 'string'): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `/genres/${Name}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Get User
  public getUser(Username: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `/users/${Username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Get Favorite Movie

  public getFavMovie(MovieID: any): Observable<any> {
    const token = localStorage.getItem('token');
    //no GET request for this endpoint previously made in API; was used for PUSH request
    return this.http.get(apiUrl + `/users/:Username/movies/${MovieID}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Add movie to favMovies

  public addFavMovie(Username: any, MovieID: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(apiUrl + `/users/${Username}/movies/${MovieID}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Delete FavMovie

  public deleteFavMovie(Username: any, MovieID: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(apiUrl + `/users/${Username}/movies/${MovieID}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Edit User Profile

  public editUserProfile(Username: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.put(apiUrl + `/users/${Username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

// Delete User Profile

  public deleteUserProfile(Username: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(apiUrl + `/users/${Username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer' + token,
      })
    })
  }

  
private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}