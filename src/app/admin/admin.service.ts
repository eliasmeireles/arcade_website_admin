import {Injectable} from '@angular/core';
import {BaseurlComponent} from '../baseurl/baseurl.component';
import {AdminComponent} from './admin.component';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable()
export class AdminService {

  constructor(private router: Router, private baseURL: BaseurlComponent, public admin: AdminComponent) {
  }

  public getUserRoot(logingComponent: LoginComponent, admin: AdminComponent) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'ftfa80c9-9284-473d-94db-759a9030905c');

    this.baseURL.http
      .post<AdminComponent>(this.baseURL.url + 'userroot/get', JSON.stringify(admin), {headers})
      .subscribe(data => {
        this.admin = data;

        if (this.admin != null && this.admin.senha != null) {
          this.router.navigateByUrl('ranking');
        } else {
          logingComponent.serviceResult = 'Acesso negado!';
        }
      }, error2 => logingComponent.serviceResult = 'Acesso negado!');
  }
}
