import {Component} from "@angular/core";
import {zapatilla} from "../models/zapatilla";
import {OnInit} from "@angular/core";

@Component({
  selector:'zapatillas',
  templateUrl: './zapatillas.component.html',
})


export class ZapatillasComponent implements OnInit{
  public titulo: string='Componente de zapatillas'
  public zapatillas: Array<zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;


  constructor() {
    this.mi_marca="";
    this.color = 'blue';
    this.marcas=new Array();
    this.zapatillas= [
      new zapatilla("Nike", 123, "Blanco", true),
      new zapatilla("Jordan", 120, "Rojo", true),
      new zapatilla("La hora", 200, "Azul", false),
      new zapatilla("Reebok", 200, "Azul", true),
      new zapatilla("Reebok", 200, "Azul", false),
    ]
  }
  ngOnInit() {
    console.log(this.zapatillas)
    this.getMarcas();
  }


  getMarcas(){
    this.zapatillas.forEach((zapatilla, index)=>{
      if(this.marcas.indexOf(zapatilla.marca) <0){
        this.marcas.push(zapatilla.marca)
      }

    });
    console.log(this.marcas)

  }
  getMarca(){
    alert(this.mi_marca)
  }
  addMarca(){
    this.marcas.push(this.mi_marca)
  }

  borrarMarca(index:number){
    //delete this.marcas[index];
    this.marcas.splice(index, 1)
  }
  onBlur(){
    console.log("has salido del input")
  }
  mostrarPalabra(){
    alert(this.mi_marca)
  }
}
