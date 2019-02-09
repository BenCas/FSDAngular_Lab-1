import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsdi 204 Angular';
  userName: string = "Ben Castillo";
  counter = 1;

  sayHello(){
    console.log("I'm a TS method");
    console.log(this.userName);
  }

  increase(){
    this.counter +=1;
  }
}
