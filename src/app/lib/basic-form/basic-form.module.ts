import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponentc } from './basic-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    
  ],
  declarations: [BasicFormComponentc],
  exports: [BasicFormComponentc]
})
export class AppBasicFormModule {}
