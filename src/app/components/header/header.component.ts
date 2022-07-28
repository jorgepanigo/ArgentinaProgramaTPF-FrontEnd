import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Header } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
     
    @Input() header:Header;
    data:Header = {} as Header;

  constructor(private ls:LoginService,
              private ps:PersonaService,
              private toastr:ToastrService) { }

 
  ngOnInit(): void { 
    
  }

  onUpdateHeader(){

    this.data = {

      id :this.header.id,
      firstName : this.header.firstName,
      lastName : this.header.lastName,
      city : this.header.city,
      country : this.header.country,
      phone : this.header.phone,
      mail : this.header.mail,
      profession : this.header.profession,
      profileBackground : this.header.profileBackground,
      profileImage : this.header.profileImage,
      linkedin: this.header.linkedin,
      github: this.header.github
    }
  
  }

  updateHeader(f:NgForm){
  
    let aux:Header = {
      id : f.value.id,
      firstName : f.value.firstName,
      lastName : f.value.lastName,
      city : f.value.city,
      country : f.value.country,
      phone : f.value.phone,
      mail : f.value.mail,
      profession : f.value.profession,
      profileBackground : f.value.profileBackground,
      profileImage : f.value.profileImage,
      linkedin:f.value.linkedin,
      github:f.value.github
    }
    
    this.ps.updateHeader(aux).subscribe(
      resp => {
        this.header = resp;
        this.toastr.success("Actulizacion Exitosa!","Datos Personales");
      }
    );
  }
  
  
  isLoged():boolean{
    return this.ls.isLoged();
  }

}
