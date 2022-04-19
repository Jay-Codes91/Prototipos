import { Component, OnInit } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
//import esLocale from '@fullcalendar/core/locales/es';
declare var Swal: any;
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
      defaultView: 'listDay',
      //locale: esLocale,
      header: {
        left: 'prev,today',
        center: 'title',
        right: 'listWeek,next'
      },
      buttonText: {
        today: 'Hoy',
        listWeek: 'Semana'
      }
    }

    this.events = [
      {
        id: 1,
        title: 'Marco Matarrita - Cubículo #5',
        start: '2022-04-07T10:30:00',
        end: '2022-04-07T15:00:00'
      }
    ]

    this.options2 = {
      plugins: [interactionPlugin, listPlugin],
      defaultView: 'listWeek',
      //locale: esLocale,
      header: {
        left: 'prev,today',
        center: 'title',
        right: 'listWeek,next'
      },
      buttonText: {
        today: 'Hoy',
        listWeek: 'Semana'
      }
    }

    this.events2 = [
      {
        id: 1,
        title: 'Marco Matarrita - Sala 2: Sala General',
        start: '2022-04-07T10:30:00',
        end: '2022-04-07T15:00:00'
      }
    ]

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

  nodisp(){
    Swal.fire({
      icon: 'error',
      title: 'Cubículo no disponible'
    })
  }

  disp(){
    Swal.fire({
      icon: 'success',
      title: 'Cubículo disponible'
    })
  }

}
