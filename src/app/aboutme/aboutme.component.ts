import { Component, Injectable, OnInit } from '@angular/core';
import { persona } from '../Model/persona.model';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  persona: persona = new persona("","","");
  
  constructor (public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data; 
      console.log(this.persona, data) })  }

}

