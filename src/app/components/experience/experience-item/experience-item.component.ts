import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
