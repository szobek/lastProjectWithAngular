import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTitleComponent } from 'src/app/components/shared/module-title/module-title.component';


@NgModule({
  declarations: [
    ModuleTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModuleTitleComponent,
  ]
})
export class SharedModule { }
