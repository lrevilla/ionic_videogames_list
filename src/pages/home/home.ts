import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewGamePage} from "../new-game/new-game";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private gamesList = [
        {
            "title": "PlayerUnkown's Battlegrounds",
            "description": "PlayerUnknown's Battlegrounds es un videojuego de batalla en línea multijugador masivo desarrollado y publicado por Bluehole para Microsoft Windows y Xbox One.",
            "platforms": [
                "PC",
                "Xbox One"
            ],
            "imageUrl": "https://d1wfiv6sf8d64f.cloudfront.net/static/pc/img/visual_main.jpg"
        },
        {
            "title": "The Legend of Zelda: Breath of the Wild",
            "description": "The Legend of Zelda: Breath of the Wild es el título oficial del videojuego de acción-aventura de la serie The Legend of Zelda, desarrollado por Nintendo EPD, en colaboración con Monolith Soft para Wii U y Nintendo Switch.",
            "platforms": [
                "Nintendo Switch",
                "Wii U"
            ],
            "imageUrl": "http://cdn.atomix.vg/wp-content/uploads/2017/11/Breath-of-the-Wild-Link.jpg"
        },
        {
            "title": "Assassin's Creed Origins",
            "description": "Assassin's Creed: Origins es un videojuego de acción-aventura y RPG de la saga Assassin's Creed cuya fecha de lanzamiento fue el 27 de octubre de 2017.​​​ Está disponible para las plataformas PlayStation 4, Xbox One y PC.",
            "platforms": [
                "PC",
                "Xbox One"
            ],
            "imageUrl": "https://ubistatic19-a.akamaihd.net/resource/es-es/game/news/assassins-creed/ac-origins/ac_news_quests_overview_ncsa_293408.jpg"
        },
        {
            "title": "God of War 4",
            "description": "God of War es un futuro videojuego de acción en tercera persona que está siendo desarrollado por SCE Santa Monica Studio y sera publicado por Sony Interactive Entertainment",
            "platforms": [
                "PlayStation 4"
            ],
            "imageUrl": "https://media.redadn.es/imagenes/god-of-war-ps4_300106.jpg"
        },
        {
            "title": "Shadows of the Colussus",
            "description": "Shadow of the Colossus es un videojuego de acción-aventura desarrollado y publicado por Sony Computer Entertainment (SCEI) para PlayStation 2, remasterizado hace unos años para PlayStation 3 y ahora remasterizado para PlayStation 4",
            "platforms": [
                "PlayStation 2",
                "PlayStation 3",
                "PlayStation 4"
            ],
            "imageUrl": "https://i.kinja-img.com/gawker-media/image/upload/s--cbKrkiWq--/c_scale,fl_progressive,q_80,w_800/fy4jm0d3nhum7ncn1cev.png"
        }
    ];

  constructor(public navCtrl: NavController) {

  }

    openNewGameForm() {
        this.navCtrl.push(NewGamePage);
    }

}
