import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { passwordConfirmationValidator } from "./password-confirmation.validator";
import { SignUpGQL } from "src/app/generated/graphql";
import { takeUntil, finalize } from "rxjs/operators";

@Component({
  selector: "ocr-sign-up-form",
  templateUrl: "./sign-up-form.component.html",
  styleUrls: ["./sign-up-form.component.scss"]
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  loading = false;
  signUpForm = this.fb.group(
    {
      name: ["", [Validators.required, Validators.pattern(/^\b.{2,25}\b$/)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: ["", Validators.required]
    },
    { validators: passwordConfirmationValidator }
  );

  private unsubscribeSubject = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private signUpGQL: SignUpGQL,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  submit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const { passwordConfirmation, ...input } = this.signUpForm.value;

    this.loading = true;

    this.signUpGQL
      .mutate({ input })
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this.toastr.success("注册成功");
        }
        if (errors) {
          this.toastr.error((errors[0].message as any).message);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
