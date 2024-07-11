import { Component } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private gameService: GamesService){

  }






}
