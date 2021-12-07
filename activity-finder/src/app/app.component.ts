import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
}