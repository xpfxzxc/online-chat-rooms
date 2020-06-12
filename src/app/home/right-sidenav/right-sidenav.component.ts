import { Component, OnInit } from "@angular/core";

import { HomeService } from "../home.service";

@Component({
  selector: "ocr-right-sidenav",
  templateUrl: "./right-sidenav.component.html",
  styleUrls: ["./right-sidenav.component.scss"]
})
export class RightSidenavComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit() {}

  toYearMonthDay(date: string) {
    const d = new Date(date);

    return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
  }
}
