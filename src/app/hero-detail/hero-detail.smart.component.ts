import {Location} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-hero-detail',
    template: `
		<app-hero-detail-ui
				[hero]="hero$ | async"
				(cancel)="goBack()"
				(heroChange)="save($event)"></app-hero-detail-ui>
    `
})
export class HeroDetailContainerComponent {
    hero$: Observable<Hero> = this.route.paramMap.pipe(
        filter(params => params.has('id')),
        switchMap(params => this.heroService.getHero(+params.get('id'))),
    );

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location,
    ) {
    }

    goBack(): void {
        this.location.back();
    }

    save(hero: Hero): void {
        this.heroService.updateHero(hero)
            .subscribe(() => this.goBack());
    }
}
