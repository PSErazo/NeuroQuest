import { Injectable } from '@angular/core';
import { ScoreGame } from '../shared/interfaces/ScoreGame';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../assets/constantes';

const url = baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  saveScore(saveScore: ScoreGame) {
    let token = localStorage.getItem('token');

    if (token) {
      console.log('hay token', token);
      return this.http.post(`${url}score`, saveScore, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    console.log('no hay');
    return;
  }

  myHistoryGame(game: number) {
    let token = localStorage.getItem('token');
    if (!token) return;

    return this.http.get(`${url}score/${game}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  recordScoreGame(game: number) {
    let token = localStorage.getItem('token');
    if (!token) return;
    return this.http.get(`${url}score/scores/${game}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
