import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 private defaultTheme:string='light';
 private theme!:string;


  constructor() { }
  setTheme(themeType:string){
    this.theme= themeType??this.defaultTheme
  }
  // ../../theme/${compName}/${compName}.${this.theme}.json
  async getTheme(compName:string){
    const themeResponse = await fetch(`/assets/theme/${compName}/${compName}.${this.theme}.json`);
    const theme = await themeResponse.json()
   return theme
  }
}
