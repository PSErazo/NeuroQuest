import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
})
export class NavComponent {}
