import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditorModule } from '@tinymce/tinymce-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubredditSideBarComponent } from './shared/subreddit-side-bar/subreddit-side-bar.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { TokenInterceptor } from './token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CreatePostComponent,
    CreateSubredditComponent,
    ListSubredditsComponent,
    PostTileComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    VoteButtonComponent,
    UserProfileComponent,
    ViewPostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
