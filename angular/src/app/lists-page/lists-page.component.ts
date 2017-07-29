import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListService } from '../services/list.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {
  myLists: any[] = [];

  newListTitle: string;

  newCardTitles: string[] = [];

  isShowingForm: boolean;

  constructor(
    private listThang: ListService,
    private cardThang: CardService
  ) { }

  ngOnInit() {
      this.listThang.lists()
        .then((listsFromApi) => {
            this.myLists = listsFromApi;
        })
        .catch((errResponse) => {
            alert('List error 🐋');
        });

        this.listThang.isShowingForm
        .subscribe((result)=>{this.isShowingForm = result});

  }



  // makeACard(theList, titleIndex) {
  //     const theTitle = this.newCardTitles[titleIndex];
  //
  //     this.cardThang.createCard(theList._id, theTitle)
  //       .then((newCardFromApi) => {
  //           theList.cards.push(newCardFromApi);
  //           this.newCardTitles[titleIndex] = '';
  //       })
  //       .catch((errResponse) => {
  //           alert('Card create error 🐋');
  //       });
  // }

}
