import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ocr-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  navLinks = [
    {
      path: "login",
      label: "登录"
    },
    {
      path: "sign-up",
      label: "注册"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
