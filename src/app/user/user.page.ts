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
    image: '',
  };

  constructor(private _http:HttpClient) { }
  onFileChange(fileChangeEvent:any) {
    console.log(fileChangeEvent,'event print');
    
    this.fileData.image = fileChangeEvent.target.files[0];
    console.log(this.fileData,'image done');
    
  }

  async submitForm() {
    console.log(this.fileData,'filedata');
    
    let formData = new FormData();

    formData.append("title", this.fileData.title);
    formData.append("description", this.fileData.description);
    formData.append("clientName", this.fileData.clientName);
    formData.append("taglines", this.fileData.taglines);
    formData.append("image", this.fileData.image);

    this._http.post("http://localhost:3000/files", formData).subscribe((response) => {
      console.log(response);
    });
  }
  // handleFileInput(files: FileList) {
  //   this.fileData.image = files.item(0);
  // }

  // handlePsdInput(files: FileList) {
  //   this.fileData.psdFile = files.item(0);
  // }

  // uploadFile() {
    
  //   this._http.post("http://localhost:3000/upload", this.fileData).subscribe((response) => {
  //         console.log(response);
  //       });
  //   console.log('File uploaded:', this.fileData);
  // }

  getAllFiles():Observable<any> {
    let url="http://localhost:3000/files"
   return this._http.get(url);
  }
  

    //...
}
