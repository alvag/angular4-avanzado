import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {

  title = 'Módulo de email';

  constructor() { }

  ngOnInit() {
    console.log('modulo email cargado');
  }

}
