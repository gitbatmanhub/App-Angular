// @ts-ignore

import { Injectable } from '@angular/core'
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
  public zapatillas: Array<Zapatilla>=[];



  constructor() {
    this.zapatillas= [
      new Zapatilla("Nike", 123, "Blanco", true),
      new Zapatilla("Jordan", 120, "Rojo", true),
      new Zapatilla("La hora", 200, "Azul", false),
      new Zapatilla("Reebok", 200, "Azul", true),
      new Zapatilla("Reebok", 200, "Azul", false),
    ];
  }
  getTexto(){
  return "Hola mundo desde un servicio"
    }
  getZapatillas(): Array<Zapatilla>{
  return this.zapatillas;
}
}



