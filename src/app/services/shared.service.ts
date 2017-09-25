import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {

    private user = new BehaviorSubject<any>(undefined);
    currentUser = this.user.asObservable();

    private token = new BehaviorSubject<string>(undefined);
    currentToken = this.token.asObservable();

    constructor() { }

    setUser(user: any) {
        if (user !== null) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('currentUser');
        }
        this.user.next(user);
    }

    setToken(token) {
        if (token !== null) {
            localStorage.setItem('tokenUser', token);
        } else {
            localStorage.removeItem('tokenUser');
        }
        this.token.next(token);
    }
}
