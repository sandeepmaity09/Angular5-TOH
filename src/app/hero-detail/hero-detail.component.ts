import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  // @Input() hero:Hero;
  hero:Hero;

  getHero():void {
    // the route.snapshot is a static image of the route information shortly after the component was created.
    // the paramMap is a dictionary of route parameter values extracted from the URL.
    // the 'id' key return the id of the hero to fetch.
    // + operator converts the string to a number, which is what a hero 'id' should be.

    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();
  }
}
