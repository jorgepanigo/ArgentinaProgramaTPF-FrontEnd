import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/persona.model';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() itemExp:Experience;

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
