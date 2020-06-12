import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { takeUntil, finalize } from "rxjs/operators";

import { LoginGQL } from "src/app/generated/graphql";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "ocr-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit, OnDestroy {
  autoLogin = true;
  loading = false;
  loginForm = this.fb.group({
    name: ["", Validators.required],
    password: ["", Validators.required]
  });

  private unsubscribeSubject = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private loginGQL: LoginGQL,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  toggle(value: boolean) {
    this.autoLogin = value;
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.loginGQL
      .mutate({
        input: this.loginForm.value
      })
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        takeUntil(this.unsubscribeSubject)
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          const {
            user: { id, name },
            token
          } = data.login;
          this.authService.saveUserData({ id, name }, token, this.autoLogin);

          this.router.navigateByUrl("/");
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
