import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() skillItem:Skill;

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }
  
  isLoged():boolean{
    return this.ls.isLoged();
  }
}
