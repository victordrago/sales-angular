import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  showLeftPanel = true;
  showRightPanel = false;

  toggleLeftPanel(): void {
    this.showLeftPanel = !this.showLeftPanel;
  }

  toggleRightPanel(): void {
    this.showRightPanel = !this.showRightPanel;
  }
}