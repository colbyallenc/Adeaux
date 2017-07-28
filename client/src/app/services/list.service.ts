import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class ListService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private httpThang: Http
  ) { }

  lists() {
      return this.httpThang
        .get(
          this.baseUrl + '/api/lists',
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }




  createList(title) {
      return this.httpThang
        .post(
          this.baseUrl + '/api/lists',
          { listTitle: title },
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }
}
