import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {

  // bookList : any = [{bookid : 201, bookprice : 1200, category : "horror", },
  //                   {bookid : 202, bookprice : 1100, category : "horror", },
  //                   {bookid : 203, bookprice : 950, category : "horror", },
  //                   ];

  constructor() { }

  ngOnInit(): void {
  }

}
