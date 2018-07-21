import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import{CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    CheckboxModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
