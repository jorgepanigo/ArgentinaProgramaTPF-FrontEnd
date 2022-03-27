import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillList:Skill[] = [];

  constructor(private ls:LoginService,
              private ps:PersonaService) { }

  ngOnInit(): void {
  
    this.skillList = this.ps.getCV().skills;

  }
  
  isLoged():boolean{
    return this.ls.isLoged();
  }

}
