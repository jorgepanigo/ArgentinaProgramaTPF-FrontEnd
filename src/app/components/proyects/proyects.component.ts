import { Component, OnInit } from '@angular/core';
import { Persona, Proyect } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectList:Proyect[] = [];

  constructor(private ls:LoginService,
              private ps:PersonaService) { }

  ngOnInit(): void {

    this.proyectList = this.ps.getCV().proyects;

  }
  
  isLoged():boolean{
    return this.ls.isLoged();
  }
}
