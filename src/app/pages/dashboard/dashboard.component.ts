import { Component } from '@angular/core';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private scoreService: ScoreService) {}
}
