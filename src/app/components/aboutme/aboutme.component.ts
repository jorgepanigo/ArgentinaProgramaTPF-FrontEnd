import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {


  @Input() description:string;
  @Output() onUpdate:EventEmitter<string> = new EventEmitter();
  textAbout:string = "";
  

  constructor(private ps:PersonaService,
              private lg:LoginService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.textAbout = this.description;
    
    
  }

  isLoged():boolean{
    return this.lg.isLoged();
  }

  guardarCambios(form:NgForm){

    let text = form.value.description;

    this.ps.updateAboutMe(text).subscribe(
      resp => {
        
        this.description = resp;
        this.toastr.success("Actualizacion Exitosa","Actualizar About Me")
        
      }
    );
    //this.onUpdate.emit(this.description);
  }

  onEdit(){

    this.textAbout = this.description;

  }
  

 
}
