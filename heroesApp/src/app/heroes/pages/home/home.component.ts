import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _router: Router, private _authService: AuthService) {

  }

  logOut() {
    this._authService.logout()
    this._router.navigate(['./auth'])
  }

  get auth() {
    return this._authService.auth
  }
}
