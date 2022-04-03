import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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


  listEdu:Education[];

  index:number;
 
  item:Education = {
    institution:"",
    graduate:"",
    beginDate:new Date(),
    endDate:new Date()
  };

  

  ngOnInit(): void {
    this.listEdu = this.ps.getCV().education;
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

  

  addItem(form:NgForm){
    this.ps.addEducationItem(form.value);
  }

  onEditItem(index:number){ 

    let myItem:Education = {

      beginDate:this.listEdu[index].beginDate,
      graduate:this.listEdu[index].graduate,
      endDate:this.listEdu[index].endDate,
      institution:this.listEdu[index].institution,
      id:this.listEdu[index].id
    }

    this.item = myItem;
    this.index = index;

  }

  saveItem(){
    this.ps.saveEducationItem(this.item, this.index);
  }


}
