import { Component } from '@angular/core';
import { SelectComponent } from "../../../../shared/components/shared/components/select/select.component";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  imports: [SelectComponent,MatIconModule],
})
export class LeftPanelComponent {}
