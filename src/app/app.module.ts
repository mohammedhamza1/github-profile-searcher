import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ResultPage} from "../pages/result/result";
import {GithubServiceProvider} from '../providers/github-service/github-service';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ResultPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ResultPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        GithubServiceProvider
    ]
})
export class AppModule {
}
