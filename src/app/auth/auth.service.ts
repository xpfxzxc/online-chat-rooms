import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { environment } from "src/environments/environment";
import { AuthenticatedUserInfo } from "../models/authenticated-user-info.model";
import { LoggedUserGQL } from "../generated/graphql";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
  private authenticatedUserInfoSource = new BehaviorSubject<
    AuthenticatedUserInfo
  >(null);

  isAuthenticated$ = this.isAuthenticatedSource.asObservable();
  authenticatedUserInfo$ = this.authenticatedUserInfoSource.asObservable();

  constructor(private loggedUserGQL: LoggedUserGQL, private router: Router) {}

  autoLogin() {
    const userId = +localStorage.getItem(environment.userIdKey);

    if (!userId) {
      return;
    }

    this.loggedUserGQL.fetch().subscribe(({ data }) => {
      if (data) {
        this.isAuthenticatedSource.next(true);
        this.authenticatedUserInfoSource.next(data.logged_user);
      }
    });
  }

  saveUserData(
    userInfo: AuthenticatedUserInfo,
    token: string,
    autoLogin: boolean
  ) {
    if (autoLogin) {
      localStorage.setItem(environment.authTokenKey, token);
      localStorage.setItem(environment.userIdKey, `${userInfo.id}`);
    }

    this.isAuthenticatedSource.next(true);
    this.authenticatedUserInfoSource.next(userInfo);
  }

  logout() {
    localStorage.removeItem(environment.authTokenKey);
    localStorage.removeItem(environment.userIdKey);

    this.isAuthenticatedSource.next(false);
    this.authenticatedUserInfoSource.next(null);

    this.router.navigateByUrl("/login");
  }

  rename(newName: string) {
    const newInfo = this.authenticatedUserInfoSource.getValue();
    newInfo.name = newName;

    this.authenticatedUserInfoSource.next(newInfo);
  }

  getUserId(): number {
    const user = this.authenticatedUserInfoSource.getValue();
    return user ? user.id : null;
  }
}
