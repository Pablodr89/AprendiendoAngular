import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
  constructor() {

  }

  ngOnInit() {
    console.log('OnInit ejecutado')
  }

  ngDoCheck() {
    console.log('DoCheck ejecutado')
  }

  ngOnDestroy() {
    console.log('OnDestroy ejecutado')
  }
}
