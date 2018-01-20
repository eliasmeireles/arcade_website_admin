import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AdminComponent} from '../admin/admin.component';
import {AdminService} from '../admin/admin.service';

@Component({
  selector: 'app-useron',
  templateUrl: './useron.component.html',
  styleUrls: ['./useron.component.scss']
})
export class UseronComponent {
  @Input() admin: AdminComponent;

  constructor(private router: Router, private adminService: AdminService) {
  }

  getUserOn() {
    this.admin = this.adminService.admin;
    if (this.adminService.admin.senha != null && this.adminService.admin.nome != null) {
      return this.admin;
    }
    return null;
  }
}
