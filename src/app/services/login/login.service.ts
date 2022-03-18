import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loged:boolean = true;

  constructor() { }

  isLoged():boolean{
    return this.loged;
  }

}
