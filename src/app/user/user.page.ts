import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  ngOnInit() {
  }
  fileData = {
    title: '',
    description: '',
    clientName: '',
    taglines: '',
    image: null,
    psdFile: null
  };

  constructor() { }

  // handleFileInput(files: FileList) {
  //   this.fileData.image = files.item(0);
  // }

  // handlePsdInput(files: FileList) {
  //   this.fileData.psdFile = files.item(0);
  // }

  uploadFile() {
    console.log('File uploaded:', this.fileData);
  }

    //...
}
