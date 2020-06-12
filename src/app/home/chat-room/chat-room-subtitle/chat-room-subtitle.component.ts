import { Component, OnInit } from "@angular/core";

import { HomeService } from "../../home.service";

@Component({
  selector: "ocr-chat-room-subtitle",
  templateUrl: "./chat-room-subtitle.component.html",
  styleUrls: ["./chat-room-subtitle.component.scss"]
})
export class ChatRoomSubtitleComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit() {}
}
