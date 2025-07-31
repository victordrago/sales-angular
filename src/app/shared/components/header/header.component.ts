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
  console.log('toggleLeft clicked');
  this.toggleLeft.emit();
}

toggleRightClicked() {
  console.log('toggleRight clicked');
  this.toggleRight.emit();
}
}
