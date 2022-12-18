import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [
    ToastComponent,
  ]
})
export class SharedModule { }
