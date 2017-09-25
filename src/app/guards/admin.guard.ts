import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { UserService } from "../services/user.service";
import { SharedService } from "../services/shared.service";

@Injectable()
export class AdminGuard implements CanActivate {

  currentUser;

  constructor(
    private router: Router,
    private userService: UserService,
    private sharedService: SharedService
  ) {}

  canActivate() {

    this.sharedService.currentUser.subscribe(res => this.currentUser = res);

    if (this.currentUser && this.currentUser.role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
