import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../assets/constantes';
import { Game } from '../shared/interfaces/Game';

const url = baseUrl;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Game[]>(`${url}game`);
  }
}
