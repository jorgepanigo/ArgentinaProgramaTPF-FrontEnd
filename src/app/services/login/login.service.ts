import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { User } from 'src/app/persona.model';
import { LocalKey, LocalStorage } from 'ts-localstorage';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http:HttpClient,
              private toastr: ToastrService) { }

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
            this.toastr.success("Inicio de sesion exitoso!","Inicio de Sesion");
      
          }else{
            
            this.toastr.error("Usuario o Contraseña no valido. Vuelva a intentarlo.")
          }
        }

    )
    
  }

loginUser(usuario:string, password:string){
  
    this.usuario = {
      user:usuario,
      password:password
    }

   

    let url = this.api+"/login"

    this.http.post<string>(url, this.usuario, httpOptions).subscribe(
        data => {
          
         
          if (data != null){

           

           
           this.loged = !this.loged;
           
      
          }else{
            console.log("Error de autenticacion");
          }
        }

    ); 
    
  }
}
