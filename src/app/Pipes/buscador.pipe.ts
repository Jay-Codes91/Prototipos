import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    const usuario = [];

    for(const user of value){
      
      if(user.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        usuario.push(user);
      }
    }
    return usuario;
  }


}
