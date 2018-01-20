import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {AdminService} from './admin.service';

@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  providers: [AdminService, AdminComponent]
})

export class AdminModule{}
