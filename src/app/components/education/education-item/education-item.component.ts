import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  constructor(private ls:LoginService,
              private ps:PersonaService) { }

  @Input() itemEdu:Education;
  @Input() index:number;
  @Output() onEditEduItem:EventEmitter<number> = new EventEmitter<number>();

  
  ngOnInit(): void {

    
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

  onEdit(){
    
    this.onEditEduItem.emit(this.index);
    

  }

  onDelete(){
    
    if(confirm("Esta seguro de desea eliminar este item?")){
      this.ps.deleteEducationItem(this.index);
    }
    
  }



}
