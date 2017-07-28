import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class CardService {
  baseUrl: string = environment.apiUrl;

  constructor(
    private httpThang: Http
  ) { }

  createCard(listId, title) {
      return this.httpThang
        .post(
          `${this.baseUrl}/api/lists/${listId}/cards`,
          { cardTitle: title },
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json())
  }
}
