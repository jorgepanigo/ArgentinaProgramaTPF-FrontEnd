import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ls:LoginService) { }
  
  usuario:string ="";
  password:string ="";
  
  
  

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }
  
  login(){
    this.ls.validateUser(this.usuario, this.password);
   

  }

  logout(){
    
    this.ls.validateUser(this.usuario, this.password);
    
  }
  
 

}
