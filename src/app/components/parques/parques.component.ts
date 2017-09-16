import { Component, Input } from '@angular/core';
import { fadeIn } from "../animations";

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css'],
  animations: [fadeIn]
})
export class ParquesComponent {

  @Input() nombre: string;
  metros: number;
  vegetacion: string;
  abierto: true;

  constructor() {
    this.nombre = 'Parque Natural para Caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
   }


}
