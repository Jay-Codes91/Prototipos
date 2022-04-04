import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nodisp(){
    Swal.fire({
      icon: 'error',
      title: 'Cubículo no disponible'
    })
  }

  resev(){
    Swal.fire({
      icon: 'info',
      title: 'Cubículo Reservado'
    })
  }

}
