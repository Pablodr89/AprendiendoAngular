import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { FormControl,Validators,FormBuilder } from '@angular/forms';

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
  public userSaved: any

  constructor(private _peticionesService: PeticionesService, private _fb: FormBuilder) {
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

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get job() {
    return this.formUser.get('job') as FormControl;
  }

  formUser = this._fb.group( {
    'name': ['', Validators.required],
    'job': ['', Validators.required],
  });

  onSubmit() {
    console.log(this.formUser.value)
    this._peticionesService.addUser(this.formUser.value).subscribe({
      next: (response) => {
        this.userSaved = response
        this.formUser.reset()
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
