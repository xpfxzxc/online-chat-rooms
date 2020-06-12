import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../home.service";

@Component({
  selector: "ocr-chat-room-message-box",
  templateUrl: "./chat-room-message-box.component.html",
  styleUrls: ["./chat-room-message-box.component.scss"]
})
export class ChatRoomMessageBoxComponent implements OnInit {
  constructor(public homeService: HomeService) {}

  ngOnInit() {}
}
