import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'retail-management-system';
  test:string = 'mj'

  changeTest() {
    this.test = 'Sashie'
  }
}
