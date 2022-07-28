import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyect } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyect-item.component.html',
  styleUrls: ['./proyect-item.component.css']
})
export class ProyectItemComponent implements OnInit {

  @Input() proyectItem:Proyect;
  @Input() index:number;
  @Output() onDelete:EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpdate:EventEmitter<number> = new EventEmitter<number>();
 
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
    this.onUpdate.emit(this.index);
  }
}
