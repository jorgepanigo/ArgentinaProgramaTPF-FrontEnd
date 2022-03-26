import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(  private ls:LoginService,
                private ps:PersonaService) { }

  edu:Education;
  listEdu:Education[];

  ngOnInit(): void {
    this.listEdu = this.ps.getCV().education;
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
