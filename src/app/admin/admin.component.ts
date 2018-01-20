import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  inputs: ['admin']
})
export class AdminComponent  {

  id: string;
  @Input() nome: string;
  @Input() email: string;
  @Input() senha: string;
}
