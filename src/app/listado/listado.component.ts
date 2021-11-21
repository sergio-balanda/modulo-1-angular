import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {
  titulo: string
  items: Item[]
  
  constructor() {
    this.titulo = "MODULO 1 PRACTICA"
    this.items = []
   }

  ngOnInit(): void {
  }

  agregar(nombre: string, descripcion: string):boolean {
    this.items.push(new Item(nombre,descripcion))
    return false
  }
}
