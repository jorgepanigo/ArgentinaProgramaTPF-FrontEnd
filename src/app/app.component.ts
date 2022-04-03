import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './services/persona/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tpf';
  perso:Persona;

  constructor(private ps:PersonaService){

  }
  ngOnInit(): void {
    this.perso = this.ps.getCV();
  }

  }



