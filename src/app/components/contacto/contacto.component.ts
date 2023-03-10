import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private _fb: FormBuilder) {

  }

  get nombre() {
    return this.formContact.get('nombre') as FormControl;
  }

  get apellidos() {
    return this.formContact.get('apellidos') as FormControl;
  }

  get email() {
    return this.formContact.get('email') as FormControl;
  }

  get mensaje() {
    return this.formContact.get('mensaje') as FormControl;
  }

  formContact = this._fb.group( {
    'nombre': ['', Validators.required],
    'apellidos': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'mensaje': ['', Validators.required]
  });

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formContact.value)
    this.formContact.reset()//Para borrar lo escrito en el formulario
  }
}
