import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Subject } from "rxjs";
import { finalize, takeUntil } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

import { RenameGQL } from "src/app/generated/graphql";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "ocr-rename-dialog",
  templateUrl: "./rename-dialog.component.html",
  styleUrls: ["./rename-dialog.component.scss"]
})
export class RenameDialogComponent implements OnInit {
  loading = false;
  renameForm = this.fb.group({
    name: new FormControl("", [
      Validators.required,
      Validators.pattern(/^\b.{2,25}\b$/)
    ])
  });

  private unsubscribeSubject = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<RenameDialogComponent>,
    private fb: FormBuilder,
    private renameGQL: RenameGQL,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  submit() {
    if (this.renameForm.invalid) {
      return;
    }

    const newName = this.renameForm.get("name").value;

    this.loading = true;

    this.renameGQL
      .mutate({
        new_name: newName
      })
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this.authService.rename(newName);
          this.dialogRef.close();
          this.toastrService.success("修改昵称成功");
        }
        if (errors && errors[0].message.includes("Uniqueness")) {
          this.toastrService.error("昵称已被使用");
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
