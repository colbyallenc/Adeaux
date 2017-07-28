import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  // const ref = new Firebase("https://radiant-torch-3037.firebaseio.com/");
 // const form = document.querySelector("form");
 //
 // form.addEventListener("submit", postComment);
 //
 // const timeStamp = () => {
 // let options = {
 // month: '2-digit',
 // day: '2-digit',
 // year: '2-digit',
 // hour: '2-digit',
 // minute:'2-digit'
 // };
 // let now = new Date().toLocaleString('en-US', options);
 // return now;
 // };
 //
 // function postComment(e) {
 // e.preventDefault();
 // let name = document.getElementById("name").value;
 // let comment = document.getElementById("comment").value;
 //
 // if (name && comment) {
 // ref.push({
 //   name: name,
 //   comment: comment,
 //   time: timeStamp()
 // });
 // }
 //
 // document.getElementById("name").value = '';
 // document.getElementById("comment").value = '';
 // };
 //
 // ref.on("child_added", function(snapshot) {
 // let comment = snapshot.val();
 // addComment(comment.name, comment.comment, comment.time);
 // });
 //
 // const addComment = (name, comment, timeStamp) => {
 // let comments = document.getElementById("comments");
 // comments.innerHTML = `<hr><h4>${name} says<span>${timeStamp}</span></h4><p>${comment}</p>${comments.innerHTML}`;
 // }
 // }



}
