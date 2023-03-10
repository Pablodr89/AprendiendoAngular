import { Component } from '@angular/core';

@Component({
    //Esto es con lo que se le llama en el html
    selector: 'game',
    templateUrl: './game.component.html'
})
//La clase convertirla en capitalcase(primera letra de cada palabra en mayus)
export class GameComponent {
    public titulo: string;
    public listado: string;
    
    constructor() {
        this.titulo = 'Componente de Game'
        this.listado = 'Listado de los juegos mas populares:'
        console.log('Se ha cargado con exito el componente Game')
    }
};