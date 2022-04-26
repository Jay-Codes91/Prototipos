import { Component, OnInit } from '@angular/core';
declare var Swal: any;
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

  desSala(){
    Swal.fire({
      title: '¿Deseas inhabilitar esta sala?',
      text: "Los usuarios no podran realizar reservas a esta sala",
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
      confirmButtonText: 'Aceptar',
      calcelButtonText: 'Cancelar',
        }).then((result) =>{
          if (result.isConfirmed){
            Swal.fire({
              icon: 'success',
              title: 'Sala inhabilitada',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: 'rgb(0, 81, 158)'
            })
          }
        })
        
        
        
      }//uu
    })
  }

}
