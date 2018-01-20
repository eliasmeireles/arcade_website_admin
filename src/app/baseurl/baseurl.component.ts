import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-baseurl',
  templateUrl: './baseurl.component.html',
  styleUrls: ['./baseurl.component.scss']
})
export class BaseurlComponent {

  devURL: string = 'http://localhost/arcade-service/api/index.php/v1/';
  prodURL: string = '/service/api/index.php/v1/';
  url: string = this.prodURL;

  headers:HttpHeaders  = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'ftfa80c9-9284-473d-94db-759a9030905c');

  constructor(private _http: HttpClient) { }

  get http(): HttpClient {
    return this._http;
  }
}
