import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { UiService } from 'src/app/services/ui.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(  private ps:PersonaService,
                private ls:LoginService,
                private ui:UiService,
                private toastr: ToastrService) { }


  @Input() listEdu:Education[];
  @Output() onUpdate:EventEmitter<Education[]> = new EventEmitter();
  @Output() onDelete:EventEmitter<Education[]> = new EventEmitter();
  @Output() onAdd:EventEmitter<Education[]> = new EventEmitter();


  index:number;
 
  item:Education = {
    institution:"",
    institutionImg:"",
    degree:"",
    beginDate:new Date(),
    endDate:new Date()
  };

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

  addItem(form:NgForm){

    let e:Education = form.value;
    this.ps.addEducationItem(e).subscribe(
      data => {

        let list:Education[] = data;
        this.listEdu = list;
        this.toastr.success("Carga exitosa!","Nuevo Item de Educacion");
      }
    );
  }

  onEditEduItem(index:number){ 

    let myItem:Education = {
      institution: this.listEdu[index].institution,
      institutionImg: this.listEdu[index].institutionImg,
      degree: this.listEdu[index].degree,
      beginDate: this.listEdu[index].beginDate,
      endDate: this.listEdu[index].endDate,
      id: this.listEdu[index].id
    };
    
    this.item = myItem;
    this.index = index;

  }

  onDeleteEduItem(i:number){
    
    if(confirm("Esta seguro de desea eliminar este item?")){
        this.ps.deleteEduItem(i).subscribe(
            data => {
            this.listEdu = data;
            this.toastr.success("Eliminacion exitosa!","Eliminar Educacion");
          }
        );

    }
    
  }

  updateItem(){
    
    this.ps.updateEducationItem(this.item).subscribe(
      data => {
        this.listEdu[this.index] = data;
        this.toastr.success("Actualizacion exitosa!","Actualizar Educacion");
      }
    );

  }





}
