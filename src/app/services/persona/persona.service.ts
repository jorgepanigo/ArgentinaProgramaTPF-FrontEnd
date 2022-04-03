import { Injectable } from '@angular/core';
import { persona } from 'src/app/persona.mock';
import { Education, Persona } from 'src/app/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  

  getCV():Persona{
    return persona;
  }

  saveAboutMe(description:string){
    persona.aboutMe = description;
  }

  addEducationItem(edu:Education){
    persona.education.push(edu);
  }

  editEducationItem(edu:Education){
    
  }

  deleteEducationItem(index:number){
    persona.education.splice(index,1);
  }

  saveEducationItem(edu:Education, index:number){
    persona.education[index] = edu;
  }
}
