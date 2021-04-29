import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Hero} from '../hero';
import {HeroesPresenterComponent} from './heroes.presenter.component';

@Component({
    selector: 'app-heroes-ui',
    templateUrl: './heroes.presentation.component.html',
    styleUrls: ['./heroes.presentation.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [HeroesPresenterComponent]
})
export class HeroesPresentationComponent implements OnInit {
    @Input() heroes: Hero[];
    @Input() title: string;
    @Output() add: EventEmitter<string> = new EventEmitter();
    @Output() remove: EventEmitter<Hero> = new EventEmitter();

    get nameControl(): FormControl {
        return this.presenter.nameControl;
    }

    constructor(private presenter: HeroesPresenterComponent) {
    }

    ngOnInit(): void {
        this.presenter.add$.subscribe(name => this.add.emit(name));
    }

    addHero(): void {
        this.presenter.addHero();
    }
}
