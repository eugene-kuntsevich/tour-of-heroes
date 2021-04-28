import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail-ui',
  templateUrl: './hero-detail.presentation.component.html',
  styleUrls: ['./hero-detail.presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPresentationComponent {
  @Input() hero: Hero;
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() heroChange: EventEmitter<Hero> = new EventEmitter();
}
