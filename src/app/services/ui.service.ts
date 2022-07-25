import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  edit:boolean=false;

  isEdit():boolean{
    return this.edit;
  }

  toggleEdit(s:boolean){
    this.edit = s;
  }
}
