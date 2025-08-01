import { Component, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatSlideToggleModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() toggleLeft = new EventEmitter<void>();
  @Output() toggleRight = new EventEmitter<void>();

  toggleLeftClicked() {
  this.toggleLeft.emit();
}

toggleRightClicked() {
  this.toggleRight.emit();
}
}
