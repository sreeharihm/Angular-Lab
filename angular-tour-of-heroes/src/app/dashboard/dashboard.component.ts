import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  heros: Hero[] = [];
  ngOnInit() {
    this.getHeros();
  }
  getHeros() {
    debugger;
    this.heroService.getHeros().subscribe(heros => this.heros = heros.slice(0,4));
  }
}
