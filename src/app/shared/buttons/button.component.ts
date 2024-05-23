import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

interface games {
  name: string;
  router: string;
}

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input()
  public games!: games[];
}
