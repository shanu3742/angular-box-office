import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { AppTitleModule } from 'src/app/lib/app-title/app-title.module';
@NgModule({
  imports: [
    CommonModule,
    AppTitleModule
  ],
  declarations: [HomeComponent],
  providers:[ThemeService],
  exports: []
})
export class HomePageModule {}
