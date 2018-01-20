import {NgModule} from '@angular/core';
import  {PermitionComponent} from './permition.component';
import {PermitionService} from './permition.service';

@NgModule({
  declarations: [PermitionComponent],
  exports: [PermitionComponent],
  providers: [PermitionComponent, PermitionService]
})
export class PermitionModule{}
