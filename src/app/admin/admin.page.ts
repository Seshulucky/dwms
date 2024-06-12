import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import User from '../types/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
 users:Array<User> =[];
  allUsers:Array<User> | undefined


  uploadedFiles = [
    { id: 1, title: 'File 1', description: 'Description 1' },
    { id: 2, title: 'File 2', description: 'Description 2' },
    { id: 3, title: 'File 3', description: 'Description 3' }
  ];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllUser().subscribe(upi=>{
      // console.log(upi);
      this.users=upi
      console.log(this.users);
      
      
    });
   }

  getAllUser():Observable<any> {
    let url="http://localhost:3000/users"
   return this.http.get(url);
  }

  createUser(){
const allUsers=this.users?.map(user=>{
   return {
    id: user._id,
    email: user.email,
    role: user.role
};
})
// this.Users?.push(this.allUsers);
console.log(allUsers,'allusers');
  }
//   downloadFile(file) {
//     console.log(`Downloading file: ${file.title}`);
//   }

//   approveFile(file) {
//     console.log(`Approving file: ${file.title}`);
//   }
}

