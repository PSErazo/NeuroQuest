import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input()
  public nameButton!: string;
  @Input()
  public href!: string;
}
