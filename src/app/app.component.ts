import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SequenceComponent } from './sequence/sequence.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SequenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NeuroQuest';
}
