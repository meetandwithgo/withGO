import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventNewComponent } from './event-new/event-new.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'event-new', component: EventNewComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
