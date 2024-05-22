import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input()
  public nameButton!: string;
  @Input()
  public href!: string;

  ngOnInit(): void {
    console.log('href', this.href);
  }
}
