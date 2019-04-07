import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { EventNewComponent } from './event-new/event-new.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TruncateStringPipe } from './truncate-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    EventNewComponent,
    TruncateStringPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
