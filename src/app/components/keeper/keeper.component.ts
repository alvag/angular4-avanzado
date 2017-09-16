import { Component, OnInit } from '@angular/core';
import { fadeIn } from "../animations";

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [fadeIn]
})
export class KeeperComponent implements OnInit {

  title = 'Cuidadores';

  constructor() { }

  ngOnInit() {
  }

}
