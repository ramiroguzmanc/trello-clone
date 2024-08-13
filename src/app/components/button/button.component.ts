import { Component, Input } from '@angular/core';
import { BtnType, BtnVariant } from './button.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() typeBtn: BtnType = 'button';
  @Input() variant: BtnVariant = 'primary';

  get getColor() {
    return {
        'bg-primary-600': this.variant === 'primary',
        'hover:bg-primary-700': this.variant === 'primary',
        'bg-yellow-400': this.variant === 'warning',
        'hover:bg-yellow-500': this.variant === 'warning',
        'hover:bg-green-700': this.variant === 'success',
        'bg-green-600': this.variant === 'success',
        'bg-red-600': this.variant === 'danger',
        'hover:bg-red-700': this.variant === 'danger',
        'bg-blue-400': this.variant === 'info',
        'hover:bg-blue-500': this.variant === 'info',
    }
  }

}
