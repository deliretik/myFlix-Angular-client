import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from './movie-card/movie-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-Client';

  constructor(public dialog: MatDialog) { }
  // function that will open dialog when signup button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // assigning dialog a width
      width: '280px'
    });
  }

  //function that will open dialog when login button is clicked
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      //assigning width to dialog
      width: '280px'
    });
  }

  openMoviesDialog(): void{
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
}