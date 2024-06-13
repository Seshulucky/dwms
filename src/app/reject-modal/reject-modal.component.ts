import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.scss'],
})
export class RejectModalComponent  {

  reason: string = "";

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  reject() {
    this.modalController.dismiss({ reason: this.reason });
  }
}
