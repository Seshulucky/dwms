import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private _http: HttpClient) {}

  userData = {
    email: '',
    password: '',
  };

  ngOnInit() {}

  login() {
    this._http.post('http://localhost:3000/login', this.userData).subscribe(
      (response) => {
        console.log(response);
      },
      // (error) => {
      //   console.log(error);
      // }
    );
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
