import {Component, Input, OnInit} from '@angular/core';
import {AdminComponent} from '../admin/admin.component';
import {AdminService} from '../admin/admin.service';
import {PermitionService} from '../permition/permition.service';
import {UseronComponent} from '../useron/useron.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() adminOn: AdminComponent;
  public serviceResult: string;
  constructor(private router: Router, private userOn: UseronComponent, private adminService: AdminService, private permitionService: PermitionService, public admin: AdminComponent) {
  }

  ngOnInit(): void {
    // if (this.userOn.getUserOn() == null) {
    //   this.permitionService.checkPermition();
    // } else {
    //   this.router.navigateByUrl('ranking');
    // }
  }

  login(evente) {
    evente.preventDefault(true);
    this.adminService.getUserRoot(this, this.admin);
  }

}
