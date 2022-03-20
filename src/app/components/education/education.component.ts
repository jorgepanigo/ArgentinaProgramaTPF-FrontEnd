import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
