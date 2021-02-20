import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { AddNewPersonComponent } from './add-new-person/add-new-person.component';

@NgModule({
  declarations: [AppComponent, PersonsListComponent, AddNewPersonComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
