import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-level',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level.component.html',
})
export class LevelComponent {
  @Input()
  public level: number = 1;
  @Input()
  public hearts: string[] = [];
}
