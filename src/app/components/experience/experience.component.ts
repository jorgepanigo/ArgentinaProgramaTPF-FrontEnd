import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: Experience[] = [];

  constructor(private ls:LoginService,
              private ps:PersonaService) { }


  ngOnInit(): void {
    this.experienceList = this.ps.getCV().experience;
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
