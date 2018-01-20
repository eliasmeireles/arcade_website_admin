import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BaseurlComponent} from '../baseurl/baseurl.component';
import {PermitionComponent} from './permition.component';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class PermitionService {


  constructor(private router: Router, private baseURL: BaseurlComponent, private permition: PermitionComponent) {
  }

  checkPermition() {

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'ftfa80c9-9284-473d-94db-759a9030905c');

    this.baseURL.http
      .get<PermitionComponent>(this.baseURL.url + 'permition/data/', {headers: headers})
      .subscribe(data => {
        // Read the result field from the JSON response.
        this.permition = data;

        if (!this.permition.isValid) {
          console.log('Permision granted!');
        }
      }, error2 => {
        this.router.navigateByUrl('/');

      });
  }
}
