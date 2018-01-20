import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlayerComponent} from '../player/player.component';
import {BaseurlComponent} from '../baseurl/baseurl.component';
import {UseronComponent} from '../useron/useron.component';
import {Router} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {Meta} from '@angular/platform-browser';
import * as $ from 'jquery';
import {PlayerService} from '../player/player.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  text: string = 'Não deixe de conferir sua posição no ranking dos players da Arcade 2.0';

  @Input() admin: AdminComponent;
  maxAddPontos: number;
  public pontosValidation: string;
  public serviceResult: string;
  players: PlayerComponent[] = [];


  // Inject HttpClient into your component or service.
  constructor(private meta: Meta, private http: HttpClient,
              private baseURL: BaseurlComponent,
              private router: Router, private userOn: UseronComponent,
              public player: PlayerComponent,
              private playerService: PlayerService) {
  }


  ngOnInit(): void {
    this.meta.addTag({name: 'robots', content: this.text});
    this.meta.addTag({property: 'og:description', content: 'Amazing'});
    $(document).ready(function () {
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

    // Make the HTTP request:
    this.getPlayersList();
  }


  public getPlayersList() {
    if (this.userOn.getUserOn() != null) {
      this.admin = this.userOn.getUserOn();
      this.playerService.getListOfPlayers(this);
    } else {
      this.router.navigateByUrl('login');
    }
  }

  public orderingList() {
    this.players.sort(function (player1, player2) {
      if (player1.pontos < player2.pontos) {
        return 1;
      } else if (player1.pontos > player2.pontos) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  alterPlayerValues(player: PlayerComponent) {
    this.serviceResult = null;
    this.pontosValidation = null;
    this.player = player;
    this.maxAddPontos = (player.pontos * 1) + 3;
  }

  atualizar(evente) {
    evente.preventDefault(true);

    if (this.player.pontos > this.maxAddPontos) {
      this.pontosValidation = 'Pode ser adcionado no máximo de 3 pontos sobre a pontuação do jogador!';
    } else {
      if (this.player.pontos < 0) {
        this.player.pontos = 0;
      }

      this.playerService.updatePlayer(this.player, this);
      this.pontosValidation = null;
      this.serviceResult = null;
    }
  }

  deletarPlayer(evente) {
    evente.preventDefault(true);
    this.playerService.delete(this.player, this);
  }

  reset() {
    this.serviceResult = null;
    this.pontosValidation = null;
    this.player = new PlayerComponent();
  }

  newPlayer(evente) {
    evente.preventDefault(true);
    if (this.player.pontos > this.maxAddPontos) {
      this.pontosValidation = 'Pode ser adcionado no máximo de 3 pontos sobre a pontuação do jogador!';
    } else {
      if (this.player.pontos < 0) {
        this.player.pontos = 0;
      }

      this.playerService.newPlayer(this.player, this);
      this.pontosValidation = null;
      this.serviceResult = null;
    }
  }
}
