import { Component, OnInit } from "@angular/core";

import { HomeService } from "../../home.service";

@Component({
  selector: "ocr-left-sidenav-nav-list",
  templateUrl: "./left-sidenav-nav-list.component.html",
  styleUrls: ["./left-sidenav-nav-list.component.scss"]
})
export class LeftSidenavNavListComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit() {}
}
