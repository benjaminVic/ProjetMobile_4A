import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  boissons: any;
  desserts: any;
  sandwitches: any;

  boisson: any;
  dessert: any;
  sandwitch: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getBoissons();
    this.getDesserts();
    this.getSandwitches();
  }

  getBoissons() {
    this.restProvider.getBoissons()
    .then(data => {
    //  this.boissons = data.data;
      this.boisson=this.boissons[0];
      console.log(this.boisson);
    });
  }

  getDesserts() {
    this.restProvider.getDesserts()
    .then(data => {
    //  this.desserts = data.data;
      console.log(this.desserts);
    });
  }

  getSandwitches() {
    this.restProvider.getSandwitches()
    .then(data => {
    //  this.sandwitches = data.data;
      console.log(this.sandwitches);
    });
  }
}
