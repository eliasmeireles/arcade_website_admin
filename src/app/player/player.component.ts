import {Component} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent  {
  id: number;
  nome: string;
  email: string;
  pontos: number;
  data: Date;
}
