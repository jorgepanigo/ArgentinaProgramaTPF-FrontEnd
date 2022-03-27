import { Component, Input, OnInit } from '@angular/core';
import { Proyect } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyect-item.component.html',
  styleUrls: ['./proyect-item.component.css']
})
export class ProyectItemComponent implements OnInit {

  @Input() proyectItem:Proyect;
  
  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }
  
  isLoged():boolean{
    return this.ls.isLoged();
  }
}
