import { Component, OnInit } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
//import esLocale from '@fullcalendar/core/locales/es';
declare var Swal: any;
declare var $: any;
@Component({
  selector: 'app-ofi53',
  templateUrl: './ofi53.component.html',
  styleUrls: ['./ofi53.component.scss']
})
export class Ofi53Component implements OnInit {

  public events: any[] = [];
  public options: any;
  public events2: any[] = [];
  public options2: any;

  constructor() { }

  ngOnInit(): void {
 
    

    this.options = {
      plugins: [interactionPlugin, listPlugin],
      defaultView: 'listWeek',
      defaultDate: '2022-04-26',
      //locale: esLocale,
      header: {
        left: 'prev,today',
        center: 'title',
        right: 'listDay,listWeek,next'
      },
      buttonText: {
        today: 'Reservas de Hoy',
        listDay: 'Día',
        listWeek: 'Semana'
      }
    }

    this.events = [
      {
        id: 1,
        title: 'Carlos Matarrita - Cubículo #3',
        start: '2022-04-26T10:30:00',
        end: '2022-04-26T15:00:00'
      },
      {
        id: 2,
        title: 'Lucía Mora - Cubículo #8',
        start: '2022-04-28T09:00:00',
        end: '2022-04-28T16:00:00'
      }
    ]

    this.options2 = {
      plugins: [interactionPlugin, listPlugin],
      defaultView: 'listWeek',
      defaultDate: '2022-04-26',
      //locale: esLocale,
      header: {
        left: 'prev,today',
        center: 'title',
        right: 'listDay,listWeek,next'
      },
      buttonText: {
        today: 'Reservas de hoy',
        listDay: 'Día',
        listWeek: 'Semana'
      }
    }

    this.events2 = [
      {
        id: 1,
        title: 'Carlos Matarrita - Sala 1: Asesoría Académica',
        start: '2022-04-27T10:30:00',
        end: '2022-04-27T11:30:00'
      }
    ]

  }

  userReser(){
    Swal.fire({
      title: '¿Deseas inhabilitar este usuario?',
      text: "El usuario no podra ingresar al sistema ni realizar ninguna reserva",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonColor: 'rgb(204, 204, 204)',
      confirmButtonText: 'Aceptar',
      calcelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const { value: accept } =  Swal.fire({
          input: 'textarea',
          inputLabel: 'Justificación',
          inputPlaceholder: 'Justificación...',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true,
          confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonColor: 'rgb(204, 204, 204)',
      confirmButtonText: 'Desactivar',
      calcelButtonText: 'Cancelar',
        }).then((result) =>{
          if (result.isConfirmed){
            Swal.fire({
              icon: 'success',
              title: 'Usuario Desactivado',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: 'rgb(0, 81, 158)'
            })
          }
        })
        
        
        
      }//uu
    })
  }

  salaReserv(){
    Swal.fire({
      title: '¿Deseas eliminar esta reserva?',
      text: "El usuario no podrá utilizar esta sala",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonColor: 'rgb(204, 204, 204)',
      confirmButtonText: 'Aceptar',
      calcelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const { value: accept } =  Swal.fire({
          input: 'textarea',
          inputLabel: 'Justificación',
          inputPlaceholder: 'Justificación...',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true,
          confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonColor: 'rgb(204, 204, 204)',
      confirmButtonText: 'Desactivar',
      calcelButtonText: 'Cancelar',
        }).then((result) =>{
          if (result.isConfirmed){
            Swal.fire({
              icon: 'success',
              title: 'Reserva eliminada',
              text: 'Se enviará una notificación por correo al usuario',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: 'rgb(0, 81, 158)'
            })
          }
        })
        
        
        
      }//uu
    })
  }
  

  resev(){
    Swal.fire({
      icon: 'info',
      title: '<strong>Cubículo Reservado</strong>',
      html: '<h5><b>Usuario: </b>Carlos Matarrita</h5>'+
            '<h5><b>Rol: </b>Encargado de XXXXXX</h5>' +
            '<h5><b>Fecha: </b>2022-04-26</h5>' +
            '<h5><b>Hora: </b>8:00am - 3:00pm</h5>',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(0, 81, 158)',
      showDenyButton: true,
      denyButtonText: 'Eliminar Reserva',
      denyButtonColor: 'rgb(255, 108, 54)'
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
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(0, 81, 158)'
      
    })
  }
  nodisp(){
    Swal.fire({
      icon: 'question',
      title: 'Cubículo no disponible',
      text: '¿Desea habilitar este cubículo?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonText: 'No',
      cancelButtonColor: 'rgb(255, 108, 54)'
    })
  }

  disp(){
    Swal.fire({
      icon: 'question',
      title: 'Cubículo disponible',
      text: '¿Desea inhabilitar este cubículo?',
      confirmButtonText: 'Si',
      showCancelButton: true,
      confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonText: 'No',
      cancelButtonColor: 'rgb(255, 108, 54)'
    })
  }

  admin(){
    Swal.fire({
      icon: 'info',
      title: 'Administrador',
      html: '<h5><b>Usuario: </b>Marta Bolaños</h5>',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'rgb(0, 81, 158)'
      
    })
  }

  

}
