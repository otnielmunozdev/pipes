import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Otniel';
  nombre2 = "victor otnIEl DiAz Escobar MunoZ";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  pi = Math.PI;
  porcentaje = 0.345;
  dinero = 2334.3;

  heroe = {
    nomber: "logan",
    clave: "wolverine",
    edad: 500,
    direccion:{
      calle: "casa",
      numero: "19"
    }

  };

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("llego la data"),3500);
  });

  fecha = new Date();

  video = "mOeSfOJrUIk";
  contrasena = true;
}
