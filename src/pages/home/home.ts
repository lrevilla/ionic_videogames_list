import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewGamePage} from "../new-game/new-game";
import {AngularFireDatabase} from "angularfire2/database/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public gamesList;

  constructor(public navCtrl: NavController,
              afDatabase: AngularFireDatabase) {

      this.gamesList = afDatabase.list("/games").valueChanges()
  }

    openNewGameForm() {
        this.navCtrl.push(NewGamePage);
    }

}
