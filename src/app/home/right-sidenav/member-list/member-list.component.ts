import { Component, OnInit } from "@angular/core";

import { HomeService } from "../../home.service";

@Component({
  selector: "ocr-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"]
})
export class MemberListComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit() {}
}
