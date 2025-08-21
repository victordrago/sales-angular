import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { searchResults } from '../../../services/mocks/cards';
import { CardData } from '../../../models/card.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [ HeaderComponent, LeftPanelComponent, RightPanelComponent, CardComponent],
  templateUrl: './main-layout.component.html',
})

export class MainLayoutComponent {
  showLeftPanel = false;
  showRightPanel = false;
  
  searchResults: CardData[] = searchResults;
 
  toggleLeftPanel(): void {
    this.showLeftPanel = !this.showLeftPanel;
  }

  toggleRightPanel(): void {
    this.showRightPanel = !this.showRightPanel;
  }
}