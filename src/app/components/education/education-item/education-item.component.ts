import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  constructor(private ls:LoginService,
              private ui:UiService) { }

  @Input() itemEdu:Education;
  @Input() index:number;
  @Output() onEditEduItem:EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteEduItem:EventEmitter<number> = new EventEmitter<number>();
 
  
  
  ngOnInit(): void {

    
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

  onEdit(){
    
    this.ui.toggleEdit(true);
    this.onEditEduItem.emit(this.index);
    
  }

  onDelete(){

    this.onDeleteEduItem.emit(this.index);
   
  }



}
