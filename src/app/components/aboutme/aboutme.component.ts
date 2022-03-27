import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  aboutme:string = "";

  constructor(private ps:PersonaService,
              private lg:LoginService) { }

  ngOnInit(): void {
   this.aboutme = this.ps.getCV().aboutMe;
  }

  isLoged():boolean{
    return this.lg.isLoged();
  }

}
