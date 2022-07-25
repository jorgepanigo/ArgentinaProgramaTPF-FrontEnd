import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() skillItem:Skill;
  @Input() index:number
  @Output() onDelete:EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit:EventEmitter<number> = new EventEmitter<number>();

  constructor(private ls:LoginService,
    private ui:UiService) { }

  ngOnInit(): void {
  }
  
  isLoged():boolean{
    return this.ls.isLoged();
  }

 

  onDeleteItem(){
    this.onDelete.emit(this.index);
  }

  onEditItem(){
    this.ui.toggleEdit(true);
    this.onEdit.emit(this.index);
  }
}
