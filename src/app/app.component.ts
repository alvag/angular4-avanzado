import { Component, OnInit } from '@angular/core';
import { SharedService } from "./services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentUser;

  constructor(private shared: SharedService) {
    this.shared.setUser(JSON.parse(localStorage.getItem('currentUser')));
    this.shared.setToken(localStorage.getItem('tokenUser'));
  }

  ngOnInit() {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.shared.currentUser.subscribe(user => this.currentUser = user);
    // console.log('token', localStorage.getItem('tokenUser'));
    // console.log('user', this.currentUser);
  }

}
