import { Component, OnInit } from '@angular/core';
import { Zapatilla } from 'src/app/models/zapatilla';
import { ZapatillaServie } from 'src/app/services/zapatilla.service';

@Component({
    //Esto es con lo que se le llama en el html
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers: [ZapatillaServie]
})
//La clase convertirla en capitalcase(primera letra de cada palabra en mayus)
export class ZapatillasComponent implements OnInit{
    public titulo: string
    public zapatillas: Array<Zapatilla>
    public marcas: String[]
    public color: string
    public miMarca: string

    constructor(private _zapatillaService: ZapatillaServie) {
      this.titulo = 'Componente de Zapatillas'
      this.marcas = new Array()
      this.color = 'orange'
    }

    ngOnInit() {
      this.zapatillas = this._zapatillaService.getZapatillas()
      console.log(this.zapatillas)
      alert(this._zapatillaService.getTexto())
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

    onBlur() {
      console.log('Has salido del input')
    }

    mostrarPalabra() {
      alert(this.miMarca)
    }
}
