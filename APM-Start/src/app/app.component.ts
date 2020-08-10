import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html'
  // ...OR...
  // template: 
  // "<h1>{{pageTitle}}</h1>"
  // ...OR...
  template:
  `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent {
  title: string = 'Acme Product Management';
  pageTitle: string = 'Acme Product Management';
}