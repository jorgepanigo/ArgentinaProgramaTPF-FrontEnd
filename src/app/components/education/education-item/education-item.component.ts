import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  constructor(private ls:LoginService) { }

  @Input() itemEdu:Education;

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
