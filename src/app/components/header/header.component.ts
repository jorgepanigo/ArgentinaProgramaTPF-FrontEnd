import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
    perfilImage:string;
     firstName:string;
     lastName:string;
     city:string;
     country:string;
     profession:string;
     mail:string;
     phone:string;
 

  constructor(private ls:LoginService,
              private ps:PersonaService) { }

 

  ngOnInit(): void { 
    
    this.firstName = this.ps.getCV().firstName;
    this.lastName = this.ps.getCV().lastName;
    this.city = this.ps.getCV().city;
    this.country = this.ps.getCV().country;
    this.profession =  this.ps.getCV().profession;
    this.mail = this.ps.getCV().mail;
    this.phone = this.ps.getCV().phone;
  }
  
  
  isLoged():boolean{
    return this.ls.isLoged();
  }

}
