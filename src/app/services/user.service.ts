import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   public url ="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  // getUsers() {
  //   return this.httpClient.get(this.url);
  // }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


}
