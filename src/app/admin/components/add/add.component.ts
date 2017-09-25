import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../../services/animal.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal.model';
import { CONFIG } from '../../../config';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { SharedService } from '../../../services/shared.service';

@Component({
    selector: 'app-admin-add',
    templateUrl: './add.component.html',
    styleUrls: [ './add.component.css' ],
    providers: [ AnimalService, UploadService ]
})
export class AddComponent implements OnInit {

    title: string;
    animal: Animal;
    user: User;
    api: string;
    token: string;
    status: string;
    fileToUpload: File;
    @ViewChild('fileInput') fileInput: any;
    @ViewChild('formAdd') formAdd;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private animalService: AnimalService,
                private uploadService: UploadService,
                private sharedService: SharedService) {

        this.title = 'Añade un nuevo animal';
        this.api = CONFIG.api;
        this.animal = new Animal('', '', '', 2017, '', '');
        this.sharedService.currentUser.subscribe(res => this.user = res);
        this.sharedService.currentToken.subscribe(res => this.token = res);
    }

    ngOnInit() {
    }

    onSubmit() {
        this.animalService.addAnimal(this.token, this.animal).subscribe(
            response => {
                // console.log(response);
                this.status = 'success';
                // subir imagen
                this.fileToUpload = this.fileInput.nativeElement.files[ 0 ];
                if (this.fileToUpload !== undefined) {
                    this.uploadService.uploadImage(this.api + '/AnimalController/uploadImage/' + response.data._id, this.fileToUpload, this.token, 'image')
                        .then((result: any) => {
                        // console.log(result);
                            this.resetForm();
                        });
                } else {
                    this.resetForm();
                }
            },
            error => {
                console.log(error);
                this.status = 'error';
            }
        );
    }

    /*fileChangeEvent() {
        this.fileToUpload = this.fileInput.nativeElement.files[ 0 ];
    }*/

    resetForm() {
        this.formAdd.reset();
        this.fileInput.nativeElement.value = '';
    }

}
