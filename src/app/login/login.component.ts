import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: AuthService) {
   }

  // login() {
  //   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  // }

}
