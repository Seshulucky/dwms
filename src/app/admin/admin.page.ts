import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  uploadedFiles = [
    { id: 1, title: 'File 1', description: 'Description 1' },
    { id: 2, title: 'File 2', description: 'Description 2' },
    { id: 3, title: 'File 3', description: 'Description 3' }
  ];

  constructor() { }

  ngOnInit() { }

//   createUser() {
//     console.log('User created');
//   }

//   downloadFile(file) {
//     console.log(`Downloading file: ${file.title}`);
//   }

//   approveFile(file) {
//     console.log(`Approving file: ${file.title}`);
//   }
}

