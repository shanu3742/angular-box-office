import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTitleComponent } from './app-title.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AppTitleComponent],
  exports: [AppTitleComponent]
})
export class AppTitleModule {}
