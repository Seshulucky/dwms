import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pendingFiles = [
    { id: 1, title: 'Pending File 1', description: 'Description 1' },
    { id: 2, title: 'Pending File 2', description: 'Description 2' },
    { id: 3, title: 'Pending File 3', description: 'Description 3' }
  ];

  // constructor() { }

  // ngOnInit() { }

  // approveFile(file) {
  //   console.log(`Approving file: ${file.title}`);
  // }

  // rejectFile(file) {
  //   console.log(`Rejecting file: ${file.title}`);
  // }
}
