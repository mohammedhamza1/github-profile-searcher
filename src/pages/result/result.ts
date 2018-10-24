import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {GithubServiceProvider} from '../../providers/github-service/github-service';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-result',
    templateUrl: 'result.html',
})
export class ResultPage {
    userNameResult: any;
    userInfoResult: any;
    userInfoResultRepository: any;
    show: boolean;

    constructor(private github: GithubServiceProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        this.show = false;
    }

    getUserInfoResult() {
        this.github.getUserInfo(this.userNameResult).subscribe(value => {
            this.userInfoResult = value;
            if (this.userInfoResult) {
                this.show = true;
                console.log(this.userInfoResult);
                return this.userInfoResult;
            } else {
                this.show = false;
                this.userInfoResult = 'User not found';
                console.log('User not found.');
            }
        }, error2 => {
            console.log(error2);
        }, () => {
            console.log('Done!');
        });

        this.github.getUserRepository(this.userNameResult).subscribe(value => {
            this.userInfoResultRepository = value;
            if (this.userInfoResultRepository.length != 0) {
                console.log(this.userInfoResultRepository);
                return this.userInfoResultRepository;
            } else {
                console.log('This user does not have any repositories yet');
            }
        }, error2 => {
            console.log(error2);
        }, () => {
            console.log('Done!');
        });
    }

    ionViewWillLoad() {
        this.presentLoading();
        this.userNameResult = this.navParams.get('username');
        this.getUserInfoResult();

    }

    presentLoading() {
        const loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 300
        });
        loader.present();
    }
}
