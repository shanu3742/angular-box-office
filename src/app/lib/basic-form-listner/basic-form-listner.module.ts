import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicFormListnerComponent } from './basic-form-listner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    
  ],
  declarations: [BasicFormListnerComponent],
  exports: [BasicFormListnerComponent]
})
export class BasicFormListnerModule {}
