import { Component, OnInit } from "@angular/core";

import { HomeService } from "../../home.service";

@Component({
  selector: "ocr-chat-room-title",
  templateUrl: "./chat-room-title.component.html",
  styleUrls: ["./chat-room-title.component.scss"]
})
export class ChatRoomTitleComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit() {}
}
