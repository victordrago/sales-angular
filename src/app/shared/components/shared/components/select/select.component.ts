import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface SelectOption<T> {
  value: T;
  text: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent<T> {

  @Input() label: string = '';
  @Input() options: SelectOption<T>[] = [];
  @Input() selectedValue?: T;
  @Output() selectionChange = new EventEmitter<T>();

  onSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(selectedValue as T);
  }
}