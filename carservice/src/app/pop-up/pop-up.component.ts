import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
 @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
