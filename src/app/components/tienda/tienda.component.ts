import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [fadeIn]
})
export class TiendaComponent implements OnInit {

  titulo: string;
  nombreParque: string;

  constructor() {
    this.titulo = 'Mi Tienda';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function() {
      $('#textojq').slideToggle();
    });
    $('#textolargo').dotdotdot();
  }

  textoRichEditor(content) {
    console.log(content);
  }


}
