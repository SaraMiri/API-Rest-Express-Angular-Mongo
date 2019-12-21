export interface IPersona {
    _id: String;
    name: String;
    apellidos: String;
    edad: Number;
    dni: String;
    color: String;
    dob: Date;
    gender: String;
    notas: String;
}

export class Persona implements IPersona  {
    _id: String;
    name: String;
    apellidos: String;
    edad: Number;
    dni: String;
    color: String;
    dob: Date;
    gender: String;
    notas: String;

    constructor(persona: IPersona)
    constructor(persona: any){
        this._id = (persona && persona._id) || null;
        this.name = (persona && persona.name) || null;
        this.apellidos = (persona && persona.apellidos) || null;
        this.edad = (persona && persona.edad) || null;
        this.dni = (persona && persona.dni) || null;
        this.color = (persona && persona.color) || null;
        this.dob = (persona && persona.dob) || null;
        this.gender = (persona && persona.gender) || null;
        this.notas = (persona && persona.notas) || null;
    }
 }