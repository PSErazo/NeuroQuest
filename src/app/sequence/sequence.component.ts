import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LevelComponent } from '../shared/level/level.component';

@Component({
  selector: 'sequence-game',
  standalone: true,
  imports: [CommonModule, LevelComponent],
  templateUrl: './sequence.component.html',
})
export class SequenceComponent {
  quadrates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
