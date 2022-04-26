import { Component, OnInit } from '@angular/core';
import {contactoUsuario} from "../models/contacto.usuario";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: contactoUsuario;
  public show_data: any;

  constructor(){
    this.usuario = new contactoUsuario('', '', '', '');
 }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.show_data = this.usuario;
    //form.reset();
    console.log('evento submit lanzado');
    console.log(this.usuario)
  }

}
