import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppTitleComponent } from 'src/app/lib/app-title/app-title.component';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**********************************Injecting Component or Directive Reference*********************************** */
  // We apply the viewChild decorator on a Component Property. It takes two arguments. A selector and opts.
 
 
  // ViewChild(selector: string | Function | Type<any>, opts: { read?: any; static: boolean; }): any
 
 
  /**
   * selector: can be a string, a type or a function that returns a string or type.
   * The change detector looks for the first element that matches the selector and updates the component 
   * property with the reference to the element. If the DOM changes and a new element matches the selector, 
   * the change detector updates the component property.
   */
  /**
   * opts: has two options.
   * static Determines when the query is resolved. True is when the view is 
   * initialized (before the first change detection) for the first time. False if you want 
   * it to be resolved after every change detection
   * 
   * 
   * read: Use it to read the different token from the queried elements.
   */

  /**
   * use case
   */
  /**
   * One of the use cases of ViewChild is to get the reference 
   * of the Child Component in the Parent Component and manipulate
   *  its properties. This is one of the ways by which the Parent 
   * can communicate with the child components.
   */

  //*************************Using Template Reference Variable******************************************** */
  /**
   * The Viewchild can also be used to query HTML elements.
   * First, assign a Template variable (#para in the example below) to the HTML element. You can then use the ViewChild to query the element.
   * ViewChild returns a ElementRef, which is nothing but a wrapper around the native HTML element.
   */


  /**
   * ViewChildren
   * ViewChildren decorator is used to getting the list of element references from the View.
   * ViewChildren is different from the ViewChild. ViewChild always returns the reference to a single element. If there are multiple elements the ViewChild returns the first matching element,
   * ViewChildren always returns all the elements as a QueryList. You can iterate through the list and access each element.
   */
  @ViewChild(AppTitleComponent,{static:true}) title!:AppTitleComponent;
  @ViewChild('dis',{static:true}) discription!:ElementRef;
  @ViewChild(AppTitleComponent , { read:'Token', static:false } ) AppTitleToken!: string;
  
  appTitle='box office'
  theme:any;
  constructor(private themeService:ThemeService){
  

  }
  ngOnInit(): void {
    this.themeService.getTheme('home').subscribe((theme) => {
      this.theme=theme;
    })
    
    this.title.appTitle='Box Office'
    console.log(this.discription.nativeElement.innerHTML);
    this.discription.nativeElement.innerHTML="are you looking for a movie or an actor"
    console.log(this.AppTitleToken)
 
  }
  

}
