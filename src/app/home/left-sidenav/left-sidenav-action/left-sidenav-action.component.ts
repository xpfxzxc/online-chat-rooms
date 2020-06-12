import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CreateRoomDialogComponent } from "src/app/dialogs/create-room-dialog/create-room-dialog.component";

@Component({
  selector: "ocr-left-sidenav-action",
  templateUrl: "./left-sidenav-action.component.html",
  styleUrls: ["./left-sidenav-action.component.scss"]
})
export class LeftSidenavActionComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  openCreateRoomDialog() {
    this.dialog.open(CreateRoomDialogComponent, {
      viewContainerRef: this.viewContainerRef
    });
  }
}
