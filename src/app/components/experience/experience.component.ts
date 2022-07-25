import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  index:number; 
  item:Experience = {
    company:"",
    position:"",
    beginDate: new Date(),
    endDate: new Date(),
    companyImg:"#"
  };

  @Input() experienceList: Experience[];
  @Output() onUpdate:EventEmitter<Experience[]> = new EventEmitter();
  @Output() onDelete:EventEmitter<Experience[]> = new EventEmitter();
  @Output() onAdd:EventEmitter<Experience[]> = new EventEmitter();
  
  constructor(private ls:LoginService,
              private ui:UiService,
              private ps:PersonaService) { }


  ngOnInit(): void {

  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

  
  isEdit():boolean{
    return this.ui.isEdit();
  }

  toggleEdit(estado:boolean){
    this.ui.toggleEdit(estado);
  }


  onEditExp(i:number){

    let exp:Experience = {
      beginDate : this.experienceList[i].beginDate,
      endDate : this.experienceList[i].beginDate,
      company : this.experienceList[i].company,
      position : this.experienceList[i].position,
      id : this.experienceList[i].id,
      companyImg : this.experienceList[i].companyImg
    }

    this.item = exp;
    this.index = i;

  }

  

  addItem(form:NgForm){
    
    let e:Experience = form.value;
    
    this.ps.addExperienceItem(e).subscribe(
      data => {
        this.experienceList.push(data);
      }
    );


    // this.experienceList.push(form.value);
    // this.onAdd.emit(this.experienceList);   

  }

  updateItem(){
    
    this.ps.updateExperiencenItem(this.item).subscribe(
      data => {
        this.experienceList[this.index] = data;
      }
    );
    //this.onUpdate.emit(this.listEdu);
    
  }

  deleteItem(i:number){

    if(confirm("Esta seguro que desea borrar este item?")){

      this.ps.deleteExperienceItem(i).subscribe(

          

        data => {
          this.experienceList = data;
        }
      );

      // this.experienceList.splice(i,1);
      // this.onDelete.emit(this.experienceList);
    }
  }

}