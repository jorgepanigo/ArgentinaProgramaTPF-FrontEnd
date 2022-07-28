import { Component, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UiService } from 'src/app/services/ui.service';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() github:string;
  @Input() linkedin:string;
  
  constructor(private ls:LoginService,
              private ui:UiService
              ) { }
  
  usuario:string ="";
  password:string ="";
  
  
  

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }
  
  login(){

    this.ls.validateUser(this.usuario, Md5.hashStr(this.password));
    
  }

  logout(){
    
    this.ls.loged = false;
    
  }
  
 

}
