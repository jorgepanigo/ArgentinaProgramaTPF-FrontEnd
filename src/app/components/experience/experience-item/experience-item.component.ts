import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experience } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() itemExp:Experience;
  @Input() index:number;
  @Output() onEdit:EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete:EventEmitter<number> = new EventEmitter<number>();

 
  constructor(private ls:LoginService,
              private ui:UiService) { }

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

   onEditItem(){
    this.ui.toggleEdit(true);
    this.onEdit.emit(this.index);

   }

   onDeleteItem(){

      this.onDelete.emit(this.index);
     
    //if(confirm("Esta seguro de desea borrar este item?")){
    //  this.ps.deleteExperienceItem(this.index);
    //  }
    
   }

}
