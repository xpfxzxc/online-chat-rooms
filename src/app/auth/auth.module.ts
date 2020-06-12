import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";

@NgModule({
  declarations: [AuthComponent, LoginFormComponent, SignUpFormComponent],
  exports: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ]
})
export class AuthModule {}
