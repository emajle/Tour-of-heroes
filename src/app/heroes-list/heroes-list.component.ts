import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import Hero from "../types/hero.type";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  selectedHero!: Hero;
  heroes!: Hero[];
  heroToAdd = '';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    // si heroToAdd = '    Coucou  '
    // alors heroToAdd.trim() = 'Coucou'
    // donc si heroToAdd = '          '
    // alors heroToAdd.trim() = ''
    if (this.heroToAdd.trim().length > 0) {
      this.heroes.push(this.heroService.createHero(this.heroToAdd));
      this.heroToAdd = '';
    } else {
      alert('Le nom du héros ne doit pas être vide');
    }
  }
  

}
