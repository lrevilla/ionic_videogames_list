import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewGamePage} from "../pages/new-game/new-game";

// Import the Firebase Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyCLpIWG1rWhh18Y06vf1C3-Ol0IVdZ04Ws",
    authDomain: "ionic-videogames-li.firebaseapp.com",
    databaseURL: "https://ionic-videogames-li.firebaseio.com",
    projectId: "ionic-videogames-li",
    storageBucket: "ionic-videogames-li.appspot.com",
    messagingSenderId: "1068483452051"
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        NewGamePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        NewGamePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
