import { Injectable } from '@angular/core';
import { ScoreGame } from '../shared/interfaces/Game';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../assets/constantes';

const url = baseUrl

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {

   }

   saveScore(saveScore:ScoreGame) {

    return this.http.post(`${url}auth/register`, saveScore)

  }

}
