import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-basic-form-listner',
  templateUrl: './basic-form-listner.component.html',
  styleUrls: ['./basic-form-listner.component.scss']
})
export class BasicFormListnerComponent  implements OnInit{
  firstName:any;
  middleName:any;
  lastName:any;
 
  showFirstName=true;
  showMiddleName=true;
  showlastName=true;
  @ViewChildren(NgModel) modelRefList!: QueryList<NgModel>;

  constructor(){

  }
  ngOnInit():void{

  }
/**
 * listen after first changed
 */
  ngAfterViewInit() {
 //run on every change
 //We can subscribe to the changes observable to find if any new elements are added/removed or moved.
    this.modelRefList.changes
      .subscribe(data => {
        console.log(data)
      }
    )
  }
 
  show() {
    this.modelRefList.forEach(element => {
      console.log(element)
      //console.log(element.value)
    });
  }
}
