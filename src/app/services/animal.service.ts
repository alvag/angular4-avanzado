import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CONFIG } from '../config';
import { Animal } from '../models/animal.model';

@Injectable()
export class AnimalService {

    api: string;

    constructor(private http: Http) {
        this.api = CONFIG.api;
    }

    addAnimal(token: string, animal: Animal) {
        const params = JSON.stringify(animal);
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this.http.post(this.api + '/AnimalController/animal', params, { headers: headers })
                   .map(res => res.json());
    }

    getAnimals() {
        return this.http.get(this.api + '/AnimalController/getAll')
            .map(res => res.json());
    }
}
