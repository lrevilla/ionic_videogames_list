import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from "angularfire2/database/database";
import { AngularFireStorage } from 'angularfire2/storage';

import { Camera } from "@ionic-native/camera";


@IonicPage()
@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html',
})
export class NewGamePage {

    private DEFAULT_IMAGE_URL = "assets/imgs/default-img.gif";

    gameForm;
    currentImageUrl = this.DEFAULT_IMAGE_URL;
    imageBinary;
    task;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder,
        private afDatabase: AngularFireDatabase,
        private camera: Camera,
        public storage: AngularFireStorage
    ) {
        this.gameForm = this.fb.group({
            title: ['', Validators.required ],
            description: ['', Validators.required ],
            platforms: ['', Validators.required ],
            imageUrl: [this.currentImageUrl]
        });
    }

    addGame() {
        const games = this.afDatabase.list('games');

        this.gameForm.value.platforms = this.gameForm.value.platforms.split(',');
        games.push(this.gameForm.value).then(result => this.navCtrl.pop())
    }

    pickGameImage(useCamera) {
        this.takePhoto(useCamera).then(
            image => {
                const fileName = `videogame_cover_${new Date().getTime()}.jpg`;
                this.imageBinary = 'data:image/jpeg;base64,' + image;
                this.storage.ref(fileName).putString(this.imageBinary, 'data_url').then(
                    storageInfo => {
                        this.currentImageUrl = storageInfo.downloadURL
                        this.gameForm.value.imageUrl = this.currentImageUrl
                    }
                );
            }
        )
    }

    async takePhoto(useCamera) {
        let cameraOptions = {
            sourceType: useCamera ? this.camera.PictureSourceType.CAMERA: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        }

        return await this.camera.getPicture(cameraOptions);
    }

}
