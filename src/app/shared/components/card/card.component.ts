import { Component, Input } from '@angular/core';

export interface CardData {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() data!: CardData; 
}