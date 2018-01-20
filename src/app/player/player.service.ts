import {Injectable} from '@angular/core';
import {toast} from 'angular2-materialize';
import {BaseurlComponent} from '../baseurl/baseurl.component';
import {Router} from '@angular/router';
import {PlayerComponent} from './player.component';
import {HttpHeaders} from '@angular/common/http';
import {RankingComponent} from '../ranking/ranking.component';

@Injectable()
export class PlayerService {
  headers: HttpHeaders;

  constructor(private router: Router, private baseURL: BaseurlComponent) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'ftfa80c9-9284-473d-94db-759a9030905c');
  }

  public getListOfPlayers(ranking: RankingComponent) {
    this.baseURL.http
      .get<PlayerComponent[]>(this.baseURL.url + 'player/list')
      .subscribe(data => {
        // Read the result field from the JSON response.
        ranking.players = data;
        ranking.orderingList();
      });
  }

  public updatePlayer(player: PlayerComponent, ranking: RankingComponent) {

    this.baseURL.http
      .put<PlayerComponent>(this.baseURL.url + 'player/update', JSON.stringify(player), {headers: this.baseURL.headers})
      .subscribe(data => {
        console.log(data);
        ranking.serviceResult = 'Atualização efetuada com secesso!';
        ranking.getPlayersList();
      }, error2 => {
        console.log(error2);
      });
  }

  public newPlayer(player: PlayerComponent, ranking: RankingComponent) {

    this.baseURL.http
      .post<PlayerComponent>(this.baseURL.url + 'player/new', JSON.stringify(player), {headers: this.baseURL.headers})
      .subscribe(data => {
        console.log(data);
        ranking.getPlayersList();
        ranking.serviceResult = 'Cadastro efetuado com secesso!';
      }, error2 => {
        console.log(error2);
      });
  }

  public delete(player: PlayerComponent, ranking: RankingComponent) {
    this.baseURL.http
      .delete(this.baseURL.url + 'player/delete/' + player.id, {headers: this.baseURL.headers})
      .subscribe(data => {
        ranking.getPlayersList();
        toast('Contato deletado com sucesso!', 6000);
        console.log(data);
      }, error2 => {
        ranking.getPlayersList();
      });
  }
}
