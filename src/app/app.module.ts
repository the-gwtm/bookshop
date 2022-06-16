import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListbookComponent } from './listbook/listbook.component';
import { HomeComponent } from './home/home.component';
import { HorrorComponent } from './Categories/horror/horror.component';
import { LoveComponent } from './Categories/love/love.component';
import { ChildrenComponent } from './Categories/children/children.component';
import { PagenotfoundComponent } from './Categories/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListbookComponent,
    HomeComponent,
    HorrorComponent,
    LoveComponent,
    ChildrenComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
