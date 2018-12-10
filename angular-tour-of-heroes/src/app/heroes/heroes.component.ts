import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }
  heroes: Hero[];
  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }
}