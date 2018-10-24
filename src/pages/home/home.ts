import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ResultPage} from "../result/result";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    userName: any;

    constructor( public navCtrl: NavController, public alertCtrl: AlertController) {
    }

    getUserInfo(): void {
        if (this.userName) {
            this.navCtrl.push(ResultPage, {username: this.userName});
        } else {
            this.showAlert();
        }
    }

    showAlert() {
        const alert = this.alertCtrl.create({
            title: 'Warning!',
            subTitle: 'Please, Enter username first!',
            buttons: ['OK']
        });
        alert.present();
    }

}
