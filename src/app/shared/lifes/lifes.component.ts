import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lifes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifes.component.html',
  styleUrl: './lifes.component.css'
})
export class LifesComponent {
  @Input() public lifes: number = 0;
}
