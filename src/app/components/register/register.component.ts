import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from "@angular/router";
import { CONFIG } from "../../config";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  title: String;
  user: User;

  constructor(
    // private _route: ActivatedRoute,
    // private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Regístrate';
    this.user = new User('', '', '', '', '', 'user', '');
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this._userService.register(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.user = new User('', '', '', '', '', 'user', '');
          form.reset();
        },
        error => {
          console.log(error);
        }
      );
  }

}
