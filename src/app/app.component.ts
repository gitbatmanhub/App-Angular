import { Component } from '@angular/core';
import {configuracion} from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'App-Angular';
  public subtitulo : string;
  public mostrar: boolean = true;
  public config;

constructor() {
  this.title= configuracion.titulo;
  this.subtitulo = configuracion.subtitulo;
  this.config= configuracion;
}


  ocultar(value:boolean){
    this.mostrar = value;
  }

}
