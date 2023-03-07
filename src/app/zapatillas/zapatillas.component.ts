import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    //Esto es con lo que se le llama en el html
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
//La clase convertirla en capitalcase(primera letra de cada palabra en mayus)
export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de Zapatillas'
    public zapatillas: Array<Zapatilla>
    public marcas: String[]
    public color: string
    public miMarca: string

    constructor() {
        this.zapatillas = [
          new Zapatilla('Nano X3', 'Reebok', 'Naranja', 80, true),
          new Zapatilla('Metcon 8', 'Nike', 'Rojo', 149.99, true),
          new Zapatilla('Lifter Legacy', 'Reebok', 'Negro', 200.00, true),
          new Zapatilla('Romaleos', 'Nike', 'Rojo', 99.99, false),
          new Zapatilla('Run Falcon', 'Adidas', 'Negro', 79.99, true),
          new Zapatilla('608', 'New Balance', 'Blanco', 49.99, false)
        ]
        this.marcas = new Array()
        this.color = 'orange'
        this.miMarca = ''
    }

    ngOnInit() {
      console.log(this.zapatillas)
      this.getMarcas()
    }

    getMarcas() {
      this.zapatillas.forEach((zapatilla, i) => {
        if(this.marcas.indexOf(zapatilla.marca) == -1) {
          this.marcas.push(zapatilla.marca)
        }
      })
      console.log(this.marcas)
    }

    getMarca() {
      alert('Ha introducido la marca ' + this.miMarca)
    }

    addMarca() {
      this.marcas.push(this.miMarca)
    }

    deleteMarca(i: number) {
      this.marcas.splice(i, 1)
    }
}
