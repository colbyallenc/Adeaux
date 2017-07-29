import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { environment } from '../../environments/environment';

@Injectable()
export class ListService {
  baseUrl: string = environment.apiUrl;
  isShowingForm:BehaviorSubject<boolean> = new BehaviorSubject(false);
  show: boolean = false;
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


  createList(title, content, tags) {
      return this.httpThang
        .post(
          this.baseUrl + '/api/lists',
          {
            listTitle: title ,
            listContent: content,
            listTags: tags
         },
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  showNewLetterForm()  {

     this.isShowingForm.next(true);
    }


    showLetters()  {
      console.log("service function ehhheheh")
      //  this.isShowingForm.next(true);

      }

    showSearch()  {
        console.log("service function ehhheheh")
        //  this.isShowingForm.next(true);

        }


}
