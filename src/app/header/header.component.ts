import { Component, OnInit } from "@angular/core";

import { ProgressBarService } from "../progress-bar.service";
import { AuthService } from "../auth/auth.service";
import { MatDialog } from "@angular/material";
import { RenameDialogComponent } from "../dialogs/rename-dialog/rename-dialog.component";

@Component({
  selector: "ocr-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public progressBar: ProgressBarService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  openRenameDialog() {
    this.dialog.open(RenameDialogComponent);
  }
}
