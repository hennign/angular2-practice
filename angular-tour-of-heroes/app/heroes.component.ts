import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router, RouterModule }   from '@angular/router';

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])

// Note: the backtick ` allows multiline templates,
// the single quote ' does not
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],
  providers: [HeroService]
})
//   Interesting bug: When I removed the hero property from
// AppComponent the list of heroes was blank. I determined that
// this was due to the other references to the hero property in
// the template. Even though the error came after the list should
// have been generated, both failed.
//   This suggests to me the entire template is processed and if
// any errors occurred, only the bare html is given. Except there
// were <li></li> for all the Heroes in the HEROES array. Bears investigation.
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

} 