import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona, Proyect } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { UiService } from 'src/app/services/ui.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectItem:Proyect = {
     title:"",
     description:"",
     githubLink:"#",
     image:"#",
     category:"#"
  }

  index:number;

  @Input() proyectList:Proyect[];
  @Output() onDelete:EventEmitter<Proyect[]> = new EventEmitter<Proyect[]>();
  @Output() onAdd:EventEmitter<Proyect[]> = new EventEmitter<Proyect[]>();
  @Output() onUpdate:EventEmitter<Proyect[]> = new EventEmitter<Proyect[]>();
 
  
  constructor(private ls:LoginService,
              private ui:UiService,
              private ps:PersonaService,
              private toastr:ToastrService) { }

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

      this.ps.deleteProyectItem(i).subscribe(
        data => {
          this.proyectList = data;
          this.toastr.success("Eliminacion Exitosa!","Eliminar Proyectos")

        }
      );
      
    }
    
  }

  onUpdateItem(i:number){

    let pro:Proyect = {
      id:this.proyectList[i].id,
      title:this.proyectList[i].title,
      description:this.proyectList[i].description,
      githubLink:this.proyectList[i].githubLink,
      category:this.proyectList[i].category,
      image:this.proyectList[i].image,

    }
    this.proyectItem = pro;
    this.index = i;
  }

  

  updateItem(form:NgForm){
    this.ps.updateProyectItem(form.value).subscribe(
      data => {
        this.proyectList[this.index] = data;
        this.toastr.success("Actualizacion Exitosa!","Actualizar Proyectos");
    }
    );
    
  }

  addItem(form:NgForm){

    let p:Proyect = form.value;

    console.log(p);
    
    this.ps.addProyectItem(p).subscribe(
      data => {
        this.proyectList = data;
        this.toastr.success("Carga Exitosa!","Nuevo Item de Proyectos")
      }
    );
  }


}
