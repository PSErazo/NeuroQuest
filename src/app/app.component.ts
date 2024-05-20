import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { ButtonComponent } from './shared/button/button.component';
import { SequenceComponent } from './sequence/sequence.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ButtonComponent, SequenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sequenceMemory = {
    name: 'Sequence Memory',
    router: 'sequencesmemory',
  };
}
