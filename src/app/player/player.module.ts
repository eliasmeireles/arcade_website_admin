import {NgModule} from '@angular/core';
import {PlayerComponent} from './player.component';
import {PlayerService} from './player.service';
import {PlayerPipesFiltroPorNome} from './player.pipes';

@NgModule({
  declarations: [PlayerComponent, PlayerPipesFiltroPorNome],
  exports: [PlayerComponent, PlayerPipesFiltroPorNome ],
  providers: [PlayerComponent, PlayerService]
})
export class PlayerModule {}
