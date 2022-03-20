import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.ls.isLoged();
  }

}
