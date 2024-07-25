import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.myChart();
    this.scoreService
      .myHistoryGame(1)
      ?.subscribe((data) => console.log('myHistoryGame', data));
    this.scoreService
      .recordScoreGame(1)
      ?.subscribe((data) => console.log('recordScoreGame', data));
  }

  myChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    // const labels = Utils.months({ count: 7 });
    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       borderColor: 'rgb(75, 192, 192)',
    //       tension: 0.1,
    //     },
    //   ],
    // };
  }
}
