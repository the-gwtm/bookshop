import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  Hlist:any=[];
  Llist:any=[];
  Clist:any=[];
  viewmode:any;
  constructor(public bs1:BookserviceService) {
   this.Hlist=this.bs1.getHorror()
   this.Llist=this.bs1.getLove()
   this.Clist=this.bs1.getChildren()
   }



  ngOnInit(): void {
  }

}
