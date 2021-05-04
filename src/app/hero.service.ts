import { Injectable } from '@angular/core';
import Hero from './types/hero.type';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    { id: 1, name: 'Batman' }, 
    { id: 2, name: 'Superman' }, 
    { id: 3, name: 'Spiderman' },
  ];

  idToGenerate: number = this.heroes.length + 1;
  
  getHeroes(): Hero[]{
    return this.heroes;
  }

  createHero(name: string){
    return { id: this.idToGenerate++, name};
  }
}
