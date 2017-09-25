import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../../services/animal.service';
import { Animal } from '../../../models/animal.model';

@Component({
    selector: 'app-admin-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ],
    providers: [ AnimalService ]
})
export class ListComponent implements OnInit {

    title: string;
    animals: Animal[];
    busqueda: string;

    constructor(private animalService: AnimalService) {
        this.title = 'Listado de Animales';
        this.animalService.getAnimals()
            .subscribe(
                response => {
                    this.animals = response.data;
                },
                error => {
                    console.log(error);
                }
            );
    }



    ngOnInit() {
    }

}
