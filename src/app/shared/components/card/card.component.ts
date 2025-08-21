import { Component, Input } from '@angular/core';
import { CardData } from '../../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() data!: CardData; 
}