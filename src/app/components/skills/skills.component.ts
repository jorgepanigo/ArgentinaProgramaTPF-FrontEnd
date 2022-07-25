import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

 
 
  @Input() skillList:Skill[];
  @Output() onDelete:EventEmitter<Skill[]> = new EventEmitter<Skill[]>();
  @Output() onAdd:EventEmitter<Skill[]> = new EventEmitter<Skill[]>();
  @Output() onUpdate:EventEmitter<Skill[]> = new EventEmitter<Skill[]>();
  
  skillItem:Skill={
    name:"",
    type:"",
    progress:0,
  };
  index:number;

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


  onDeleteItem(i:number){

    if(confirm("Esta seguro que desea borrar este item?")){

      this.ps.deleteSkillItem(i).subscribe(
        data => {
          this.skillList = data;
        }
      );
      // this.skillList.splice(i,1);
      // this.onDelete.emit(this.skillList);
    }
    
  }

  onEditItem(i:number){
    let sk:Skill = {
      name:this.skillList[i].name,
      progress:this.skillList[i].progress,
      type:this.skillList[i].type,
      id:this.skillList[i].id,
    }

    this.skillItem = sk;
    this.index = i;

  }

  addItem(form:NgForm){

    let s:Skill = form.value;

    this.ps.addSkillItem(s).subscribe(
      data =>
      {
        this.skillList.push(data);
      }
    );
    
    // this.skillList.push(form.value);
    // this.onAdd.emit(this.skillList);

  }

  updateItem(form:NgForm){

    this.ps.updateSkillItem(form.value).subscribe(
      data => {
        this.skillList[this.index] = data;
    }
    );
    // this.skillList[this.index] = form.value;
    // this.onUpdate.emit(this.skillList);
  }
}
