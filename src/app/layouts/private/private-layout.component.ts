import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  templateUrl: './private-layout.component.html',
  imports: [RouterOutlet],
})
export class PrivateLayoutComponent {}