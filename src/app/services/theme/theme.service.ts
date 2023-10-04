import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 private defaultTheme:string='light';
 private theme!:string;


  constructor(private https:HttpClient) { }
  setTheme(themeType:string){
    this.theme= themeType??this.defaultTheme
  }
  // ../../theme/${compName}/${compName}.${this.theme}.json
   getTheme(compName:string){
    return this.https.get<any>(`/assets/theme/${compName}/${compName}.${this.theme}.json`)
  }
}
