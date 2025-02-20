import { Component } from '@angular/core';
import {  FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  styleUrl: './formulario.component.css', 
  template: `
  <main>
    <h2 class="section-heading">Log In</h2>
        <form [formGroup]="logInForm" (submit)="submitLogIn()">
          <label for="user-name">User Name</label>
          <input id="user-name" type="text" formControlName="userName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="age">Age</label>
          <input id="age" type="number" formControlName="age">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">

          <label for="check">Aceptar Condiciones</label>
          <input id="check" type="checkbox" class="primary" formControlName="conditions">
          
          <button  type="submit" class="primary" [disabled]="!logInForm.valid">Log In</button>
        </form>
    </main>`
})
export class FormularioComponent {
  logInForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.logInForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]], 
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]], 
      age: [[Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(17)]],
      email: ['', [Validators.required, Validators.email]],
      conditions: [false, [Validators.required]]
    });
  }

  submitLogIn() {
    window.alert("Bienvenido " + this.logInForm.get('userName')?.value)
  }
}
