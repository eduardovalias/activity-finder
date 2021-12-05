import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'activity-finder';

  showUI = true;

  search(){
    this.showUI = false;
    
  }
}
