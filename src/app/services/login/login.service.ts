import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  loged:boolean = true;
  usuario:string = "jpanigo";
  password:string = "admin"

  constructor() { }

  isLoged():boolean{
    return this.loged;
  }

  validateUser(usuario:string, password:string){
    
    if (usuario === this.usuario && password === this.password){

      console.log(this.loged);
      this.loged = !this.loged;
      console.log(this.loged);

      console.log(usuario);
      console.log(password);

    }else{
      console.log("Error de autenticacion");
    }
    
    
  }
}
