import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the NewGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html',
})
export class NewGamePage {

    private myForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
      this.myForm = this.fb.group({
          title: ['', Validators.required ],
          description: ['', Validators.required ],
          platforms: ['', Validators.required ]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewGamePage');
  }
    
    

}
