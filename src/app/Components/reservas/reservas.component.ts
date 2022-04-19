import { Component, OnInit } from '@angular/core';
declare var Swal: any;

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  date: string = "";
  date2: string = "";
  date3: string = "";
  time: string = "";
  time2: string = "";
  time3: string = "";
  time4: string = "";
  time5: string = "";
  time6: string = "";
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
      title: '<strong>Cubículo Reservado</strong>',
      html: '<h5><b>Usuario: </b>Mario Matarrita</h5>'+
            '<h5><b>Rol: </b>Encargado de cátedra</h5>',
      footer: '<button class="btn btn-danger" type="button">Eliminar Reserva</button>'
      
    })
  }

 

}
