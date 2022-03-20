import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  loged:boolean = false;

  constructor() { }

  isLoged():boolean{
    return this.loged;
  }

  validateUser(){
    console.log(this.loged);
    this.loged = !this.loged;
    console.log(this.loged);
  }
}
