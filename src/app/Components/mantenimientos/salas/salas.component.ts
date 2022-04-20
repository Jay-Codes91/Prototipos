import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {

  capMax: number = 0;
  capPer: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
