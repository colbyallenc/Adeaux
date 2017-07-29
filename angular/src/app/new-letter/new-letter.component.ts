import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { environment } from '../../environments/environment';
import { ListService } from '../services/list.service';
import { CardService } from '../services/card.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


declare var $: any;

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {
  myLists: any[] = [];

  newListTitle: string;
  newListContent: string;
  newListTags: string;





  constructor(
    private listThang: ListService,
    private cardThang: CardService
  ) { }

  ngOnInit() {




    console.log('gdfnknknknknknkkkkkkghdhgfghfgfhgfgh')
    this.listThang.lists()
      .then((listsFromApi) => {
          this.myLists = listsFromApi;
      })
      .catch((errResponse) => {
          alert('List error 🐋');
      });


    //juqery to send plane
    $().ready(function() {
                $('.send').click(function() {
                    setTimeout(function() {
                        $('#plate').removeClass('front');
                        $('#container').removeClass('beginning');
                        $('.curvable').addClass('curved');
                        setTimeout(function() {
                            $('#container').addClass('hover');
                            setTimeout(function() {
                                $('#container').addClass('fly_away_first');
                                setTimeout(function() {
                                    $('#container').addClass('fly_away');
                                    setTimeout(function(){
                                        $('#plate').addClass('front');
                                        $('#container').removeClass('fly_away fly_away_first hover').addClass('beginning');
                                        $('.curvable').removeClass('curved');
                                    },3000);
                                }, 600);
                            }, 2000);
                        }, 2800);
                    }, 200);
                });
            });

}


  makeAList() {
    this.listThang.createList(this.newListTitle, this.newListContent, this.newListTags)
      .then((newListFromApi) => {
          this.myLists.push(newListFromApi);
          this.newListTitle = '';
          this.newListContent = '';
          this.newListTags = '';
      })
      .catch((errResponse) => {
          alert('List create error 🐋');
      });
  }


}
