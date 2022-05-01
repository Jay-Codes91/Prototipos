import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any[] = [
    {
      id: 1,
      nombre: 'Carlos',
      apellido1: 'Matarrita',
      apellido2: 'Campos',
      rol: 'Encargado de XXXXXX',
      correo: 'carlos.matarrita@empresa.com',
      estado: 'activo'
    },
    {
      id: 2,
      nombre: 'Lucia',
      apellido1: 'Mora',
      apellido2: 'Castro',
      rol: 'Asistente de XXXXXX',
      correo: 'lucia.mora@empresa.com',
      estado: 'activo'
    },
    {
      id: 3,
      nombre: 'Yadira',
      apellido1: 'Gonzáles',
      apellido2: 'Hernández',
      rol: 'Asistente de XXXXXX',
      correo: 'yadira.gonzales@empresa.com',
      estado: 'activo'
    }
  ]
  constructor() { }

  getUsuarios(){
    return this.usuarios;
  }
}
