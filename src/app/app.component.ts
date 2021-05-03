import { Component } from '@angular/core';

let heroCount = 2;

@Component({
  selector: 'app-root', // Angular l'interprète comme "racine du dossier"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La tour des Héros';
  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  username = 'Anonymous';
  heroes = [
    "Batman", 
    "Catwoman", 
    "Wonder Woman", 
    "Iron Man"
  ];
  badGuys = [
    "Joker", 
    "Thor", 
    "Ant-Man", 
    "Hulk", 
    "Bucky"
  ];
  manager = '';

  manage(bad?: string, add?: string){
    if(add == 'add'){
      if(bad == 'bad'){
        this.badGuys.push(this.manager);
      }else{
        this.heroes.push(this.manager);
        this.title = 'La tour des ' + this.heroes.length + ' héros';
      }
    }else{
      if(bad == 'bad'){
        const index: number = this.badGuys.indexOf(this.manager);
        if (index !== -1){
          this.badGuys.splice(index, 1);
        }
      }else{
        const index: number = this.heroes.indexOf(this.manager);
          if (index !== -1){
          this.heroes.splice(index, 1);
          }
     
      }
    }
}
  /*addHero(){
    this.heroes.push(this.manager);
    this.title = 'La tour des ' + this.heroes.length + ' héros';
  }
  removeHero(){
    const index: number = this.heroes.indexOf(this.manager);
    if (index !== -1){
      this.heroes.splice(index, 1);
      this.title = 'La tour des ' + this.heroes.length + ' héros';
    }
  } 
*/
  


}
