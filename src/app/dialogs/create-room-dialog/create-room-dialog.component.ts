import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { finalize, takeUntil } from "rxjs/operators";

import {
  CreateRoomGQL,
  HomeQuery,
  HomeDocument,
  HomeQueryVariables
} from "src/app/generated/graphql";
import { HomeService } from "src/app/home/home.service";

@Component({
  selector: "ocr-create-room-dialog",
  templateUrl: "./create-room-dialog.component.html",
  styleUrls: ["./create-room-dialog.component.scss"]
})
export class CreateRoomDialogComponent implements OnInit {
  createRoomForm = this.fb.group({
    name: ["", [Validators.required, Validators.pattern(/^\b.{2,25}\b$/)]],
    introduction: ["", [Validators.maxLength(200)]]
  });
  loading = false;

  private unsubscribeSubject = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<CreateRoomDialogComponent>,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private createRoomGQL: CreateRoomGQL,
    private homeService: HomeService
  ) {}

  ngOnInit() {}

  submit() {
    if (this.createRoomForm.invalid) {
      return;
    }

    this.loading = true;

    this.createRoomGQL
      .mutate(this.createRoomForm.value, {
        update: (store, { data }) => {
          const homeQueryVariables = this.homeService.homeQueryVariables;

          const homeData = store.readQuery<HomeQuery, HomeQueryVariables>({
            query: HomeDocument,
            variables: homeQueryVariables
          });

          homeData.myCreatedRooms.push(data.insert_room.returning[0]);
          homeData.myEnteredRooms.push({
            room: data.insert_room.returning[0],
            __typename: "user_room"
          });

          store.writeQuery<HomeQuery, HomeQueryVariables>({
            query: HomeDocument,
            variables: homeQueryVariables,
            data: homeData
          });
        }
      })
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this.dialogRef.close();
          this.toastrService.success("成功创建房间");
        }
        if (errors) {
          this.toastrService.error("未知错误,创建房间失败");
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
