import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //properties / attributes
  componentTitle : string = "Create New User";
  UserName: string;
  personalInfoShown : boolean=true;

  //constructor
  //this is automatic called when the userformcomponent is created
  //commonly used to initialize properties in the class
  constructor() { 
    console.log("I am the UserFormComponent constructor");
  }

    //methods / functions
  ngOnInit() {
  }

  save(){
    console.log("button pressed", this.UserName);
  }

  hide(){
    this.personalInfoShown = false;

  }
  show(){
    this.personalInfoShown=true;
  }
}
