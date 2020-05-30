import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
