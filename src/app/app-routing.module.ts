import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventNewComponent } from './event-new/event-new.component';
import { LoginComponent } from './login/login.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'event-new', component: EventNewComponent },
  { path: 'event-detail/:id', component: EventDetailComponent },
  { path: 'buy/tickets/:id', component: BuyTicketComponent },
  { path: 'myinfo', component: MyinfoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
