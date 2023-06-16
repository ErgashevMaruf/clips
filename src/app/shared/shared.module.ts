import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
// import { ModalService } from '../sevices/modal.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { EventPreventDirective } from './directives/event-prevent.directive'
@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventPreventDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [ModalComponent, TabsContainerComponent, TabComponent,
    InputComponent, AlertComponent,
    EventPreventDirective],
  // providers: [ModalService]
})
export class SharedModule { }
