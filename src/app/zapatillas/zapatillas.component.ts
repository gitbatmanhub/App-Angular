import {Component} from "@angular/core";
import {Zapatilla} from "../models/zapatilla";
import {OnInit} from "@angular/core";
import {ZapatillaService} from "../services/zapatilla.service";

@Component({
  selector:'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})


export class ZapatillasComponent implements OnInit{
  public titulo: string='Componente de zapatillas'
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;


  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.mi_marca="";
    this.color = 'blue';
    this.marcas=[];
    this.zapatillas=[];

  }
  ngOnInit() {

    this.zapatillas= this._zapatillaService.getZapatillas();
    this.getMarcas()
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
