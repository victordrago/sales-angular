import { Component } from '@angular/core';
import { SelectComponent } from '../../../../shared/components/shared/components/select/select.component';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  imports: [SelectComponent],
})
export class LeftPanelComponent {}
