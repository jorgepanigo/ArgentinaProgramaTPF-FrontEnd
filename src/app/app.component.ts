import { Component, OnInit } from '@angular/core';
import { Education, Experience, Header, Persona, Proyect, Skill } from './persona.model';
import { PersonaService } from './services/persona/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  persona:Persona = {} as Persona;
  header:Header = {} as Header;

  
  constructor(private ps:PersonaService){}

  ngOnInit(): void {

    this.ps.getCV().subscribe(
      data => {
        
        this.persona = data as Persona;



        this.header.city = this.persona.city;
        this.header.country = this.persona.country;
        this.header.firstName = this.persona.firstName;
        this.header.lastName = this.persona.lastName;
        this.header.mail = this.persona.mail;
        this.header.phone = this.persona.phone;
        this.header.profession = this.persona.profession;
        this.header.profileBackground = this.persona.profileBackground;
        this.header.profileImage = this.persona.profileImage;
        this.header.linkedin = this.persona.linkedin;
        this.header.github = this.persona.github;


 
      
      }
    );
  }

 
  


  }



