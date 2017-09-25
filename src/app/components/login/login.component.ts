import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  title: String;
  user: User;
  currentUser: string;

    constructor(
      // private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService,
      private shared: SharedService
    ) {
      this.title = 'Iniciar Sesión';
      this.user = new User('', '', '', '', '', '', '');
    }

    ngOnInit() {
      this.shared.currentUser.subscribe(res => this.currentUser = res);
    }

    onSubmit(form) {
      this._userService.login(this.user.email, this.user.password)
        .subscribe(
          response => {
            // console.log(response);
            if (response.data.token && response.data.user) {
              this.shared.setUser(response.data.user);
              this.shared.setToken(response.data.token);
              this._router.navigate(['/']);
              this.user = new User('', '', '', '', '', 'user', '');
              form.reset();
            }
          },
          error => {
            console.log(error);
          }
        );
    }

}
