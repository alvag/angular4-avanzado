import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { CONFIG } from "../config";
import { SharedService } from "./shared.service";

@Injectable()
export class UserService {

  url: String;
  token: String;

  constructor(
    private _http: Http,
    private sharedService: SharedService
  ) {
    this.url = CONFIG.api;
    sharedService.currentToken.subscribe(res => this.token = res);
  }

  register(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + '/UserController/registrar', params, { headers: headers })
      .map(res => res.json());
  }

  login(email, password) {
    const params = JSON.stringify({ email: email, password: password });
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + '/UserController/login', params, { headers: headers })
      .map(res => res.json());
  }

  updateUser(user) {
    const params = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token});
    return this._http.put(this.url + '/UserController/update/' + user._id, params, {headers: headers})
      .map(res => res.json());
  }

}
