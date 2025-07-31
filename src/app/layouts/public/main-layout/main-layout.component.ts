// Fichero: src/app/layouts/main-layout/main-layout.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LeftPanelComponent
  ],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  showLeftPanel = false;

  toggleLeftPanel() {
    this.showLeftPanel = !this.showLeftPanel;
  }
}