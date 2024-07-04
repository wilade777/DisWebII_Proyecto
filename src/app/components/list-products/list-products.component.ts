import { Component,OnInit } from '@angular/core';
import { Product } from '../../interfaces/product'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
    listProducts: Product[] = [
      {name: 'MEM04GB', description: 'Memoria Ram de 4 GB', ubicacion: 'R0101', stock: 10},
      {name: 'UCS-SD480GBMS4-EV', description: 'Unidad de Estado Solido', ubicacion: 'R0201', stock: 5},
      {name: 'UCSC-MRAID12G-4GB=', description: 'Cisco Controlador Sas de 12 gb/s -', ubicacion: 'R0301', stock: 3},
      {name: 'UCS-CPU-E52620E=', description: 'Processor Xeon E5-2600', ubicacion: 'R0201', stock: 15}
    ]
  constructor(){}
  ngOnInit(): void {
    
  }

}
