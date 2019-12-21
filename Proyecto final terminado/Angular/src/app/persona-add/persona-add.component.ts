import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../server/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.css']
})
export class PersonaAddComponent implements OnInit {

  name: String;
  apellidos: String;
  edad: Number;
  dni: String;
  color: String;
  dob: Date;
  gender: String;
  notas: String;

  constructor(
    private router: Router,
    private personaApi: PersonaService
  ) { }

  ngOnInit() {
    this.name = null;
    this.apellidos = null;
    this.edad = null;
    this.dni = null;
    this.color = null;
    this.dob = null;
    this.gender = 'No especificado';
    this.notas = null;
  }

  submitPersonaForm() {
    this.personaApi.AddPersona(null, this.name, this.apellidos, this.edad, this.dni, this.color, this.dob, this.gender, this.notas).subscribe( response => {
      this.router.navigateByUrl('');
    });
  }

}