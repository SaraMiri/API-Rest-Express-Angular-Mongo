import { Component, OnInit } from '@angular/core';
import { Persona } from '../server/persona';
import { PersonaService } from '../server/persona.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  dataSource = new MatTableDataSource<Persona>([]);
  displayedColumns: string[] = ['name', 'apellidos', 'dni', 'action'];

  constructor(private personaService: PersonaService) { }

  loadPersonas(){
    this.personaService.Getpersonas().subscribe( personas => {
      this.dataSource.data = personas;
    });
  }

  ngOnInit() {
    this.loadPersonas();
  }

  deletePersona(id, e) {
    if (window.confirm('Are you sure')) {
      this.personaService.DeletePersona(id).subscribe(res =>{
        this.loadPersonas();
      });
    
    }
  }
}