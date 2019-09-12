import { Pipe, PipeTransform } from '@angular/core';
import { Logs } from 'selenium-webdriver';

@Pipe({
    name: 'capitalizado'
})
export class capitalizadoPipe implements PipeTransform {
    transform(value: string, args:any[],todas:boolean = true):string { // ...args: any[] para usar todos los arreglos
        //console.log(value);
        
        //return "hola mundo";
        value = value.toLowerCase();

        let nombres = value.split(" ");

        if (todas) {
            for (let i in nombres) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }else{
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }


        return nombres.join(" ");


    }
}