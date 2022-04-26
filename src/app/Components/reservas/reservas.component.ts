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
      title: 'Cubículo no disponible',
      text: 'Motivo abcdefg',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(0, 81, 158)'
    })
  }

  resev(){
    Swal.fire({
      icon: 'info',
      title: '<strong>Cubículo Reservado</strong>',
      html: '<h5><b>Usuario: </b>Carlos Matarrita</h5>'+
            '<h5><b>Rol: </b>Encargado de XXXXXX</h5>'+
            '<h5><b>Fecha: </b>2022-04-26</h5>' +
            '<h5><b>Hora: </b>8:00am - 3:00pm</h5>'+
            '<hr>',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,  
      denyButtonText: 'Eliminar Reserva',
      cancelButtonText: 'Cerrar'
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire({
          title: '¿Deseas eliminar tu reserva?',
          text: "No podrás utilizar este espacio",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cerrar',
          confirmButtonColor: 'rgb(0, 81, 158)'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Reserva eliminada',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: 'rgb(0, 81, 158)'

            })
              
          }
        })
      }
    })
  }

  resev2(){
    Swal.fire({
      icon: 'info',
      title: '<strong>Cubículo Reservado</strong>',
      html: '<h5><b>Usuario: </b>Lucia Mora</h5>'+
            '<h5><b>Rol: </b>Asistente de XXXXXX</h5>'+
            '<h5><b>Fecha: </b>2022-04-28</h5>' +
            '<h5><b>Hora: </b>9:00am - 4:00pm</h5>',
      showDenyButton: false,
      showCancelButton: true,
      showConfirmButton: false,  
      cancelButtonText: 'Cerrar'
      
    })
  }

  reservaSala(){
    Swal.fire({
      title: '¿Deseas eliminar tu reserva?',
      text: "No podrás utilizar este espacio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cerrar',
      confirmButtonColor: 'rgb(0, 81, 158)'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Reserva eliminada',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: 'rgb(0, 81, 158)'

        })
          
      }
    })
  }

  

}
