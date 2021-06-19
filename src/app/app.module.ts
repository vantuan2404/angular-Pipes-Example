import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PipeTitle } from './PipeString.pipe';
import { PipeDirection } from './PipeDirection.pipe';
import { PipeAdult } from './PipeAdult.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PipeTitle, PipeDirection, PipeAdult ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
