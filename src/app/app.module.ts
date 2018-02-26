import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyNewDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
