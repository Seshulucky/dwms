import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userData = {
    email: '',
    password: '',
  };

  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }
  login() {
    this._http.post('http://localhost:3000/signup', this.userData).subscribe(
      (response) => {
        console.log(response);
      },
      // (error) => {
      //   console.log(error);
      // }
    );
  }
}
