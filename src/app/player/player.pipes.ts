import {Pipe, PipeTransform} from '@angular/core';
import {PlayerComponent} from './player.component';


@Pipe({
  name: 'filtroPlayerPorNome'
})

export class PlayerPipesFiltroPorNome implements PipeTransform {

  transform(players: PlayerComponent[], playerNome: string) {

    playerNome = playerNome.toLowerCase().trim();

    return players.filter(player => player.nome.toLowerCase().includes(playerNome) || player.email.toLowerCase().includes(playerNome));
  }
}
