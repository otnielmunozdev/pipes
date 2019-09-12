import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenaPipe'
})
export class ContrasenaPipePipe implements PipeTransform {

  transform(value:string , activar:boolean = true): any {

    if (activar) {
      let salida:string = "";
      for (let index = 0; index < value.length; index++) {
        salida += "*";
        
      }return salida;
      
      
    }else{
      return value;
    }
    
  }

}
