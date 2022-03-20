import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
