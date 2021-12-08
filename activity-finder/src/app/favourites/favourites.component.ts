import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  local = window.localStorage;
  keys = Object.keys(localStorage);
  x: any;

  delete(i:number){
    this.local.removeItem(this.keys[i]);
    this.x = document.getElementById("btn" + i);
    this.x.remove();
  }

  ngOnInit(): void {
  }
}