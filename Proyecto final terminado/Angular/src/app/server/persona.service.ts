import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  endpoint: string = 'api/personas/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) {   }

  // Add persona
  AddPersona(id, name, apellidos, edad, dni, color, dob, gender, notas) {
    let persona = new Persona({_id: id, name, apellidos, edad, dni, color, dob, gender, notas});
    return this.http.post(this.endpoint, persona);
  }

  // Get persona
  Getpersonas(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  // Get persona
  GetPersona(id): Observable<any> {
    return this.http.get(this.endpoint + id);
  }

  // Update persona
  UpdatePersona(id, persona: Persona) {
    return this.http.put(this.endpoint + id, persona, { headers: this.headers })
  }

  // Delete persona
  DeletePersona(id) {
    return this.http.delete(this.endpoint + id);
  }
}