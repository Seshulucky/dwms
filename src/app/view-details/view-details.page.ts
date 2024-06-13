import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RejectModalComponent } from  '../reject-modal/reject-modal.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
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
