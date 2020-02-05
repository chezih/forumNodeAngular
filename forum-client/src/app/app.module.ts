import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ForumService} from '../core/services/forum.service';
import {ForumThreadComponent} from './components/forum-thread/forum-thread.component';
import {ForumCommentComponent} from './components/forum-comment/forum-comment.component';
import {ForumComponent} from './components/forum/forum.component';
import {UsersComponent} from './components/users/users.component';
import {UserService} from '../core/services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SocketService} from '../core/services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ForumThreadComponent,
    ForumCommentComponent,
    ForumComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ForumService, UserService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
