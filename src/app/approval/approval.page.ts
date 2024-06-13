import { Component, OnInit } from '@angular/core';
import { RejectModalComponent } from '../reject-modal/reject-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  pendingFiles = [
    { id: 1, title: 'Pending File 1', description: 'Description 1' },
    { id: 2, title: 'Pending File 2', description: 'Description 2' },
    { id: 3, title: 'Pending File 3', description: 'Description 3' }
  ];


  async openRejectModal() {
    const modal = await this.modalController.create({
      component: RejectModalComponent,
       cssClass: 'reject-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        console.log('Reject reason:', data.data.reason);
        // Handle the reject reason here
      }
    });

    return await modal.present();
  }
}
  // constructor() { }

  // ngOnInit() { }

  // approveFile(file) {
  //   console.log(`Approving file: ${file.title}`);
  // }

  // rejectFile(file) {
  //   console.log(`Rejecting file: ${file.title}`);
  // }
