import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute, private router: Router, private _snackbar: MatSnackBar, private _dialog: MatDialog) {

  }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')) {
      return
    }

    this._activatedRoute.params
    .pipe(
      switchMap(({id}) => this._heroesService.getHeroeId(id))
    )
    .subscribe(
      (heroe => this.heroe = heroe)
    )
  }

  guardar() {
    console.log(this.heroe)
    if(this.heroe.superhero.trim().length === 0) {
      return
    }

    if(this.heroe.id) {
      this._heroesService.actualizarHeroe(this.heroe).subscribe(
        heroe => this.mostrarSnackbar('Registro actualizado'))
    } else {
      this._heroesService.agregarHeroe(this.heroe).subscribe(
        heroe => {
          this.router.navigate(['/heroes/editar', heroe.id])
          this.mostrarSnackbar('Registro creado')
        }
      )
    }
  }

  eliminar() {
    let diaolog = this._dialog.open(ConfirmarComponent, {
      width: '25rem',
      height: '7.5rem',
      data: this.heroe
    })

    diaolog.afterClosed().subscribe(
      (result) => {
        if(result) {
          this._heroesService.elminarHeroe(this.heroe.id!).subscribe(
            resp => {
              this.router.navigate(['/heroes'])
              this.mostrarSnackbar('Registro eliminado')
            }
          )
        }
      }
    )
  }

  mostrarSnackbar(mensaje: string) {
    this._snackbar.open(mensaje, 'Ok!', {
      duration: 3000
    })
  }
}
