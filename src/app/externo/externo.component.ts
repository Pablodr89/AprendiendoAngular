import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})

export class ExternoComponent implements OnInit {
  public users: any
  public userId: any
  public user: any
  public fecha: any

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1
  }

  ngOnInit() {
    this.fecha = new Date()

    this._peticionesService.getUsers().subscribe({
      next: (response) => {
        console.log(response)
        this.users = response.data
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.info('Complete')
      }
    })

    this.loadUser()
  }

  loadUser() {
    this.user = false
    this._peticionesService.getUsersId(this.userId).subscribe({
      next: (response) => {
        console.log(response)
        this.user = response.data
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.info('Complete')
      }
    })
  }
}
