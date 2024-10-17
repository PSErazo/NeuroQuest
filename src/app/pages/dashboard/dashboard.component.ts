import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import Chart, { registerables } from 'chart.js/auto';
import { myScore } from '../../shared/interfaces/ScoreGame';
// Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private scoreService: ScoreService) {}

  chartdata: myScore[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  ngOnInit(): void {
    this.loadchartdata();
  }

  loadchartdata() {
    this.scoreService.myHistoryGame(1)?.subscribe((data) => {
      console.log('myHistoryGame', data);
      this.chartdata = data;
      const dataN: number[] = [];
      if (this.chartdata != null) {
        this.chartdata.map((o) => {
          this.realdata.push(o.score);
          this.labeldata.push('');
        });
        // this.realdata = [...dataN];
        console.log('myScore', this.realdata);
        console.log('Renderlinechart', [...dataN]);

        this.Renderlinechart(this.labeldata, this.realdata, this.colordata);
      }
    });
    this.scoreService
      .recordScoreGame(1)
      ?.subscribe((data) => console.log('recordScoreGame', data));
  }

  Renderlinechart(labeldata: any, valuedata: any, colordata: any) {
    this.Renderchart(labeldata, valuedata, 'green', 'linechart', 'line');
  }

  Renderchart(
    labeldata: any,
    valuedata: any,
    colordata: any,
    chartid: string,
    charttype: any
  ) {
    console.log(labeldata, valuedata);

    const mychar = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'My Score',
            data: valuedata,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'red',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}
