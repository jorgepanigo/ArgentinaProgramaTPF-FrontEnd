import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { Education, Experience, Header, Persona, Proyect, Skill } from 'src/app/persona.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 
  
  
  
 
   api:string = "http://localhost:8080/0";
 // api:string = " http://localhost:3000/persona/1"

  constructor(private http:HttpClient) {
    
  }
  
  getCV():Observable<any>{
    
    return this.http.get(this.api);
    
  }
  
 
  update(persona:Persona):Observable<any>{
    
    return this.http.put(this.api, persona, httpOptions);

  }

  //HEADER CRUD
  
  updateHeader(h:Header):Observable<Header> {

    let url = this.api+"/header/update";
    
    return  this.http.put<Header>(url, h, httpOptions);  


  }
  
  //ABOUT ME CRUD
  updateAboutMe(about:String):Observable<any> {
    
    let url = this.api+"/aboutme/update";

    return  this.http.put(url, about, {responseType:"text"});

  }

  //EDUCATION CRUD

  updateEducationItem(item:Education):Observable<Education>{
    let url = this.api+"/education/update";
    return this.http.put<Education>(url, item, httpOptions);
  }


  addEducationItem(item: Education):Observable<Education[]> {
    
    let url = this.api+"/education/new";

    return this.http.post<Education[]>(url, item, httpOptions);

  }

  deleteEduItem(i: number): Observable<Education[]> {

    let url = this.api+"/education/delete/"+i;
    
    return this.http.delete<Education[]>(url);
  }
  

 
  //EXPERIENCE CRUD

  addExperienceItem(item: Experience):Observable<Experience> {
    
    let url = this.api+"/experience/new";

    return this.http.post<Experience>(url, item, httpOptions);

  }

  updateExperiencenItem(item: Experience) {
    let url = this.api+"/experience/update";
    return this.http.put<Experience>(url, item, httpOptions);
  }

  deleteExperienceItem(i: number): Observable<Experience[]> {

    let url = this.api+"/experience/delete/"+i;
    
    return this.http.delete<Experience[]>(url);
  }

  //SKILL CRUD

  addSkillItem(item: Skill):Observable<Skill> {
    
    let url = this.api+"/skill/new";

    return this.http.post<Skill>(url, item, httpOptions);

  }

  updateSkillItem(item: Skill) {
    let url = this.api+"/skill/update";
    return this.http.put<Skill>(url, item, httpOptions);
  }

  deleteSkillItem(i: number): Observable<Skill[]> {

    let url = this.api+"/skill/delete/"+i;
    
    return this.http.delete<Skill[]>(url);
  }
  //PROYECT CRUD

  addProyectItem(item: Proyect):Observable<Proyect[]> {
    
    let url = this.api+"/proyect/new";
    
    return this.http.post<Proyect[]>(url, item, httpOptions);
  }


  updateProyectItem(item: Proyect) {
    let url = this.api+"/proyect/update";
    return this.http.put<Proyect>(url, item, httpOptions);
  }

  deleteProyectItem(i: number): Observable<Proyect[]> {
    let url = this.api+"/proyect/delete/"+i;
    return this.http.delete<Proyect[]>(url);
  }
 
}
