import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError
} from "@angular/router";

enum Color {
  primary = "primary",
  warn = "warn"
}

enum Mode {
  determinate = "determinate",
  indeterminate = "indeterminate",
  query = "query"
}

@Injectable({
  providedIn: "root"
})
export class ProgressBarService {
  private colorSource = new BehaviorSubject<Color>(Color.primary);
  private modeSource = new BehaviorSubject<Mode>(Mode.determinate);

  color$ = this.colorSource.asObservable().pipe(distinctUntilChanged());
  mode$ = this.modeSource.asObservable().pipe(distinctUntilChanged());
  value = 100;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.indeterminate();
          break;
        }

        case event instanceof NavigationEnd: {
          this.complete();
          break;
        }

        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.error();
        }
      }
    });
  }

  complete() {
    this.colorSource.next(Color.primary);
    this.modeSource.next(Mode.determinate);
  }

  indeterminate() {
    this.colorSource.next(Color.primary);
    this.modeSource.next(Mode.indeterminate);
  }

  query() {
    this.colorSource.next(Color.primary);
    this.modeSource.next(Mode.query);
  }

  error() {
    this.colorSource.next(Color.warn);
    this.modeSource.next(Mode.determinate);
  }
}
