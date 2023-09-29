import { Component,OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private themeService:ThemeService){

    this.themeService.setTheme(!this.isChecked?'light':'dark');
    this.themeService.getTheme('app').then((theme:any) => {
      console.log(theme)
    })
  }
  isChecked=false;
  title = 'box';
  theme:any;
  
  onToggleChange(){
    this.themeService.setTheme(!this.isChecked?'light':'dark');
    this.themeService.getTheme('app').then((theme:any) => {
      console.log(theme)
    })
    console.log(this.isChecked)
  }

  ngOnInit(){


  }
  
}
