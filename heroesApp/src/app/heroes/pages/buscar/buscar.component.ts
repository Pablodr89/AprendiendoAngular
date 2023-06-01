import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = ''
  heroes: Heroe[] = []
  heroeSeleccionado: Heroe | undefined

  constructor(private _heroesService: HeroesService) {

  }

  ngOnInit(): void {

  }

  buscar() {
    this._heroesService.getSugerencias(this.termino.trim()).subscribe(
      heroes => this.heroes = heroes
    )
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if(!event.option.value) {
      this.heroeSeleccionado = undefined
      return
    }

    let heroe: Heroe = event.option.value
    this.termino = heroe.superhero

    this._heroesService.getHeroeId(heroe.id!).subscribe(
      heroe => this.heroeSeleccionado = heroe
    )
  }
}
