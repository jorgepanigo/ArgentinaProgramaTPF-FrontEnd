import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { EducationItemComponent } from './components/education/education-item/education-item.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';
import { SkillItemComponent } from './components/skills/skill-item/skill-item.component';
import { ProyectItemComponent } from './components/proyects/proyect-item/proyect-item.component';
import { FormsModule } from '@angular/forms';
import { PersonaService } from './services/persona/persona.service';
import { LoginService } from './services/login/login.service';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutmeComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    SkillItemComponent,
    ProyectItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    CommonModule,

    HttpClientModule
  ],
  providers: [
    PersonaService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
