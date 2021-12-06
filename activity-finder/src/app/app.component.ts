import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Activity } from '../models/activity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http : HttpClient){}
  
  title = 'activity-finder';
  showUI = true;
  readonly apiURL = 'http://www.boredapi.com/api/';

  displayVal = '';

  allData: Activity[] = [];

  search(type: string, key:string){
    this.showUI = false;

    if(key != '') {
      this.http.get<Activity[]>(`${ this.apiURL }activity?key=${ key }`)
              .subscribe(data => console.log(data));
    } 
    else if(type != ''){
      this.http.get<Activity[]>(`${ this.apiURL }activity?type=${ type }`)
              .subscribe(data => console.log(data));
    } 
    else {
      this.http.get<Activity[]>(`${ this.apiURL }activity/`)
              .subscribe(data => console.log(data));
    }  
  }
}