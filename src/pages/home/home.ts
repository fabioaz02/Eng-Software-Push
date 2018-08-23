import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Description
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    SDSADSA
  </ion-content>`
})
export class Profile {

  constructor(params: NavParams) {

  }

}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private navParams: NavParams) {

  }

  openModal() {
    this.modalCtrl.create(Profile).present();
  }

}
