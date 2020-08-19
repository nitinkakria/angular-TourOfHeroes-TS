import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES; 
  selectedHero : Hero;
  constructor() { }

  ngOnInit() {
    var hero = this.heroes.filter(function(hero){
      return hero.id=1;
    });
    this.onSelect(hero);
  }

   onSelect = function(hero:Hero):void{
    this.selectedHero = hero;
  }
}