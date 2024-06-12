import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import File from '../types/file';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
files:Array<File>=[];
  ngOnInit() {
    this.getAllFiles().subscribe(upi=>{
      // console.log(upi);
      this.files=upi
      console.log(this.files);
    
    });
  }
  fileData = {
    title: '',
    description: '',
    clientName: '',
    taglines: '',
    image: null,
    psdFile: null
  };

  constructor(private _http:HttpClient) { }

  // handleFileInput(files: FileList) {
  //   this.fileData.image = files.item(0);
  // }

  // handlePsdInput(files: FileList) {
  //   this.fileData.psdFile = files.item(0);
  // }

  uploadFile() {
    console.log('File uploaded:', this.fileData);
  }
  getAllFiles():Observable<any> {
    let url="http://localhost:3000/files"
   return this._http.get(url);
  }

    //...
}
