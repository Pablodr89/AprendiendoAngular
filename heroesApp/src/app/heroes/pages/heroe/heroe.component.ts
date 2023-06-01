import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() heroe!: Heroe

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

  }

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this._heroesService.getHeroeId(id))
      )
      .subscribe(heroe => {
        this.heroe = heroe
        console.log(heroe)
      })
  }
}
