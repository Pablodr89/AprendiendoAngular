import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string
  public followers: number

  constructor(private _router: Router, private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre
      this.followers = +params.followers

      if(this.nombre == 'ninguno') {
        this._router.navigate(['/home'])
      }
    })
  }

  redirect() {
    this._router.navigate(['/zapatillas'])
  }
}
