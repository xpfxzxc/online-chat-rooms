import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ocr-chat-room-message",
  templateUrl: "./chat-room-message.component.html",
  styleUrls: ["./chat-room-message.component.scss"]
})
export class ChatRoomMessageComponent implements OnInit {
  @Input() name: string;
  @Input() time: string;
  @Input() content: string;

  constructor() {}

  ngOnInit() {}
}
