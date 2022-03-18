import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  private Loged: boolean = false;

  ngOnInit(): void {
  }

  isLoged():boolean{
    return this.Loged;
  }
}
