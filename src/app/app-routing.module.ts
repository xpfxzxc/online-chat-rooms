import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ]
})
export class AppRoutingModule {}
