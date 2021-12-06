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

  search(){
    this.showUI = false;
   // this.http.get('http://www.boredapi.com/api/activity/').subscribe(data => {
   //  console.log(data);
   // });
   this.http.get<Activity[]>(`${ this.apiURL }activity/`)
            .subscribe(data => console.log(data));
    
  }
}