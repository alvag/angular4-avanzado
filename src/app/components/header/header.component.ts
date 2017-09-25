import { Component, OnInit, DoCheck } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CONFIG } from '../../config';
import { User } from '../../models/user.model';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit, DoCheck {

    title = 'ngZoo';
    currentUser: User;
    api: string;

    constructor( private shared: SharedService ) {
        this.api = CONFIG.api;
    }

    ngOnInit() {
        this.shared.currentUser.subscribe( res => this.currentUser = res );
    }

    ngDoCheck() {
    }

    logout() {
        localStorage.removeItem( 'tokenUser' );
        localStorage.removeItem( 'currentUser' );
    }

}
