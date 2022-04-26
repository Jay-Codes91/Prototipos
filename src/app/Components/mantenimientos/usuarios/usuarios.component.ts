import { Component, OnInit } from '@angular/core';
declare var Swal: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actUser(){
    Swal.fire({
      title: '¿Deseas habilitar este usuario?',
      text: 'El usuario posdrá acceder al sistema y realizar reservas',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(0, 81, 158)',
      cancelButtonColor: 'rgb(204, 204, 204)',
      confirmButtonText: 'Aceptar',
      calcelButtonText: 'Cancelar',
    }).then((result) => {
     
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario habilitado',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: 'rgb(0, 81, 158)'
        })
      }
    })
  }

  desUser(){
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
}



/*
const { value: accept } = Swal.fire({
          input: 'textarea',
          inputLabel: 'Justificación',
          inputPlaceholder: 'Ingrese su justificación aquí',
          inputAttributes: {
            'aria-label': 'Type your message here'
          },
          showCancelButton: true,
          confirmButtonColor: 'rgb(0, 81, 158)',
          cancelButtonColor: 'rgb(204, 204, 204)',
          confirmButtonText: 'Desactivar',
          calcelButtonText: 'cancelar',
          
        })
        if(accept){
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        }
*/