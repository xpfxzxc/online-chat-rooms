import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatSidenavModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { GraphQLModule } from "./graphql.module";
import { HeaderComponent } from "./header/header.component";
import { LeftSidenavComponent } from "./home/left-sidenav/left-sidenav.component";
import { LeftSidenavActionComponent } from "./home/left-sidenav/left-sidenav-action/left-sidenav-action.component";
import { LeftSidenavNavListComponent } from "./home/left-sidenav/left-sidenav-nav-list/left-sidenav-nav-list.component";
import { RightSidenavComponent } from "./home/right-sidenav/right-sidenav.component";
import { ChatRoomComponent } from "./home/chat-room/chat-room.component";
import { ChatRoomMessageBoxComponent } from "./home/chat-room/chat-room-message-box/chat-room-message-box.component";
import { ChatRoomFormComponent } from "./home/chat-room/chat-room-form/chat-room-form.component";
import { ChatRoomTitleComponent } from "./home/chat-room/chat-room-title/chat-room-title.component";
import { ChatRoomSubtitleComponent } from "./home/chat-room/chat-room-subtitle/chat-room-subtitle.component";
import { MemberListComponent } from "./home/right-sidenav/member-list/member-list.component";
import { ChatRoomMessageComponent } from "./home/chat-room/chat-room-message-box/chat-room-message/chat-room-message.component";
import { RenameDialogComponent } from "./dialogs/rename-dialog/rename-dialog.component";
import { CreateRoomDialogComponent } from './dialogs/create-room-dialog/create-room-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeftSidenavComponent,
    LeftSidenavActionComponent,
    LeftSidenavNavListComponent,
    RightSidenavComponent,
    ChatRoomComponent,
    ChatRoomMessageBoxComponent,
    ChatRoomFormComponent,
    ChatRoomTitleComponent,
    ChatRoomSubtitleComponent,
    MemberListComponent,
    ChatRoomMessageComponent,
    RenameDialogComponent,
    CreateRoomDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RenameDialogComponent, CreateRoomDialogComponent]
})
export class AppModule {}
