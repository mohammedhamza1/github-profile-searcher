import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from "../../models/user.interface";
import {Repository} from "../../models/repository.interface";
import {REPOSITORY_LIST} from "../../mocks/repository.mocks";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

    constructor(public http: HttpClient) {

    }

    getUserInfo(username: string) {
        return this.http.get(`https://api.github.com/users/${username}`).map(value => value);
        // return Observable.of(USER_LIST.filter(user => user.user_name === username)[0]);
    }

    getUserRepository(username: string) {
        return this.http.get(`https://api.github.com/users/${username}/repos`).map(value => value);
        // return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.user_name === username));
    }

}
