import {Component} from '@angular/core';


@Component({
  selector: 'app-permition',
  templateUrl: './permition.component.html',
  styleUrls: ['./permition.component.scss']
})
export class PermitionComponent {

  id: string;
  permitionToken: string;
  isValid: boolean;
}
