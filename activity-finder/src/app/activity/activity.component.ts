import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private http : HttpClient){}

  showUI = true;
  readonly apiURL = 'http://www.boredapi.com/api/';

  displayVal = '';

  allData: any;

  search(type: string, key:string){
    this.showUI = false;

    if(key != '') {
      this.http.get(`${ this.apiURL }activity?key=${ key }`)
              .subscribe(data => {console.log(data); this.allData = data;});
    } 
    else if(type != ''){
      this.http.get(`${ this.apiURL }activity?type=${ type }`)
              .subscribe(data => {console.log(data); this.allData = data;});
    } 
    else {
      this.http.get(`${ this.apiURL }activity/`)
              .subscribe(data => {console.log(data); this.allData = data;});
    }  
  }

  fav(activity: string, type: string, key: string){
    
  }

  ngOnInit(): void {
  }

}