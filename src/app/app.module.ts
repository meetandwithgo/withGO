import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { EventNewComponent } from './event-new/event-new.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TruncateStringPipe } from './truncate-string.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxUploaderModule } from 'ngx-uploader';
import { LoginComponent } from './login/login.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    EventNewComponent,
    TruncateStringPipe,
    LoginComponent,
    EventDetailComponent,
    MyinfoComponent,
    NotFoundComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgxUploaderModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
