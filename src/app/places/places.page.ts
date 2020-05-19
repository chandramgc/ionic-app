import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  onOpenMenu(){
    this.menuController.toggle('m1');
  }
}
