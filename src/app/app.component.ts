import { Component } from "@angular/core";

import { AuthService } from "./auth/auth.service";

@Component({
  selector: "ocr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Online Chat Rooms";

  constructor(private authService: AuthService) {
    authService.autoLogin();
  }
}
