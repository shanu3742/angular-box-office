import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.scss'],
  providers: [{ provide: 'Token', useValue: 'Value' }]
})
export class AppTitleComponent  implements OnInit{
  appTitle='box'
  constructor(){}
  ngOnInit(): void {
    
  }

}
