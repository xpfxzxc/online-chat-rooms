import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";

const authRoutes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginFormComponent
      },
      {
        path: "sign-up",
        component: SignUpFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
