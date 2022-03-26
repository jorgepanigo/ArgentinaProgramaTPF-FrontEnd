import { Injectable } from '@angular/core';
import { persona } from 'src/app/persona.mock';
import { Persona } from 'src/app/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getCV():Persona{
    return persona;
  }
}
