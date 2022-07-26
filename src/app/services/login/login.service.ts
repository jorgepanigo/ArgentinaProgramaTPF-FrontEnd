import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { User } from 'src/app/persona.model';
import { LocalKey, LocalStorage } from 'ts-localstorage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
       
  })
}

@Injectable({
  providedIn: 'root'
})


export class LoginService {
 
  token:string;
  loged:boolean = false;
  usuario:User;
  
  
  api:string ="https://protected-tor-95639.herokuapp.com";


  //api:string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  isLoged():boolean{
    return this.loged;
  }

  validateUser(usuario:string, password:string){
  
    this.usuario = {
      user:usuario,
      password:password
    }

   

    let url = this.api+"/autenticate"

    this.http.post<boolean>(url, this.usuario, httpOptions).subscribe(
        data => {
          
          
         
          if (data){

            
            this.loged = !this.loged;
           
      
          }else{
            console.log("Error de autenticacion");
          }
        }

    );    
    
    // if (resultado){

    //   console.log(this.loged);
    //   this.loged = !this.loged;
    //   console.log(this.loged);

    // }else{
    //   console.log("Error de autenticacion");
    // }
    
    
  }

loginUser(usuario:string, password:string){
  
    this.usuario = {
      user:usuario,
      password:password
    }

   

    let url = this.api+"/login"

    this.http.post<string>(url, this.usuario, httpOptions).subscribe(
        data => {
          console.log(data);
         
          if (data != null){

           this.token = data;

           console.log(this.token);
           this.loged = !this.loged;
           
      
          }else{
            console.log("Error de autenticacion");
          }
        }

    ); 
    
  }
}
