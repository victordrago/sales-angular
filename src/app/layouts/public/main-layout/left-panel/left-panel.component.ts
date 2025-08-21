import { Component } from '@angular/core';
import { SelectComponent } from "../../../../shared/components/shared/components/select/select.component";
import {MatIconModule} from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  imports: [SelectComponent, MatIconModule, MatDivider],
})
export class LeftPanelComponent {}
