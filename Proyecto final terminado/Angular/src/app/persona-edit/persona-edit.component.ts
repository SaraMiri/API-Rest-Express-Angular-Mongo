import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../server/persona.service';
import { Persona } from '../server/persona';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {

  id: string;
  persona: Persona;
  name: String = null;
  apellidos: String = null;
  edad: Number = null;
  dni: String = null;
  color: String = null;
  dob: Date = null;
  gender: String = null;
  notas: String = null;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.persona = new Persona(null);
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.personaService.GetPersona(this.id).subscribe( persona => {
      this.persona = persona[0] as Persona;
    });
  
  }

  submitPersonaForm() {
    console.log(this.persona);
    this.personaService.UpdatePersona(this.id, this.persona).subscribe ( response => {
      this.router.navigateByUrl('/persona-list')
    }) 
  }
}