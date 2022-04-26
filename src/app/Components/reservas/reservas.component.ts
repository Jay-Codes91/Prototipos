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
      text: 'Para obtener más información consulta al administrador',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(0, 81, 158)'
    })
  }

  resev(){
    Swal.fire({
      icon: 'info',
      title: '<strong>Cubículo Reservado</strong>',
      html: '<h5><b>Usuario: </b>Mario Matarrita</h5>'+
            '<h5><b>Rol: </b>Encargado de cátedra</h5>'+
            '<h5><b>Fecha: </b>XXXXXXXX</h5>' +
            '<h5><b>Hora: </b>XXXXX</h5>'+
            '<hr>',
      showDenyButton: true,
      showCancelButton: true,  
      confirmButtonText: 'Modificar',
      denyButtonText: 'Eliminar Reserva',
      cancelButtonText: 'Cerrar',
      confirmButtonColor: 'rgb(255, 200, 67)'
      
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
              title: 'Reseva eliminada',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: 'rgb(0, 81, 158)'

            })
              
          }
        })
      }
    })
  }

 

}
