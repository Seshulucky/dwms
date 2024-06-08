import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async signInWithGoogle() {
    try {
      // const googleUser = await GoogleAuth.signIn();
      // console.log('Google user:', googleUser);
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  }
}
