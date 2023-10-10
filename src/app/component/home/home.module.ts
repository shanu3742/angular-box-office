import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { AppTitleModule } from 'src/app/lib/app-title/app-title.module';
import { AppBasicFormModule } from 'src/app/lib/basic-form/basic-form.module';
import { BasicFormListnerModule } from 'src/app/lib/basic-form-listner/basic-form-listner.module';

@NgModule({
  imports: [
    CommonModule,
    AppTitleModule,
    AppBasicFormModule,
    BasicFormListnerModule
  ],
  declarations: [HomeComponent],
  providers:[ThemeService],
  exports: []
})
export class HomePageModule {}
