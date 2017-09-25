import { Component, OnInit } from '@angular/core';
import { CONFIG } from "../../config";
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { SharedService } from "../../services/shared.service";
import { UploadService } from "../../services/upload.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {

  title: string;
  api: string;
  user: User;
  currentUser: User;
  token: string;
  status: string;
  fileToUpload;

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private uploadService: UploadService
  ) {
    this.title = 'Actualizar mis datos';
    sharedService.currentUser.subscribe(res => this.currentUser = res);
    sharedService.currentToken.subscribe(token => this.token = token);
    this.user = Object.assign({}, this.currentUser); // copiar objetos
    this.api = CONFIG.api;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.updateUser(this.user)
      .subscribe(
      response => {
        this.sharedService.setToken(response.data.token);
        this.user = response.data.user;
        this.status = 'success';
        if (this.fileToUpload !== undefined) {
          this.uploadService.uploadImage(this.api + '/UserController/uploadAvatar/' + this.user._id, this.fileToUpload, this.token, 'avatar', this.user.avatar)
            .then((result: any) => {
              this.user.avatar = result.data.avatar;
              this.sharedService.setUser(this.user);
            });
        } else {
          this.sharedService.setUser(this.user);
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
      );
  }

  fileChangeEvent(file: any) {
    this.fileToUpload = file.target.files[0];
  }

}
