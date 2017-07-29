import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { ListItemsPage } from '../list-items/list-items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mySlider') slider: Slides;
  selectedSegment: string;
  slides: any;

  search:string;
  // slides:any[];
  mySlideOptions = {
    pager:true
  };
  hideCol: any = false;

  constructor(public navCtrl: NavController) {
    this.slides = [
      {
        id: 1,
        MediaUrl: "assets/img/1.jpg"
      },{
        id: 2,
        MediaUrl: "assets/img/2.jpg"
      },{
        id: 3,
        MediaUrl: "assets/img/3.jpg"
      },{
        id: 4,
        MediaUrl: "assets/img/4.jpg"
      },{
        id: 5,
        MediaUrl: "assets/img/5.jpg"
      }
    ];
  }

  showCol (value) {
    if (value == 'show') {
      this.hideCol = true;
    } else {
      this.hideCol = false;
    }
  }

  // goto list items
  gotoListItemsPage() {
    this.navCtrl.push(ListItemsPage);
  }

}
