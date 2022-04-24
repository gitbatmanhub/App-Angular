import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})



export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public listado: string;


  constructor() {

    this.titulo = "Componente de Titulo";
    this.listado= "Listado de los juegos de moda 2022"
    console.log("Se ha cargado el componente videojuego")


  }
  ngOnInit() {
    //console.log("OnInit ejecutado")
  }
  ngDoCheck(){
    //console.log("Docheck Crado")
  }
  ngOnDestroy() {
    //console.log("On destroy ejecutado")

  }
  cambiarTitulo(){
    this.titulo="Nuevo Titulo del componente";
  }


}
