import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponentc implements OnInit {
  firstName: any;
  middleName: any;
  lastName: any;
  @ViewChildren(NgModel) modelRefList!: QueryList<NgModel>;
  constructor(){}
  ngOnInit(): void {
    
  }
  show() {
   
    this.modelRefList.forEach(element => {
      console.log(element)
      console.log(element.value)
    });
  }

}
